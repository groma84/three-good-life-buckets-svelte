<script>
    import { onDestroy } from "svelte";
    import { supabaseStore } from "../stores/supabase";

    let username = "";
    let password = "";

    let unsubscribe;

    function unsub() {
        if (unsubscribe) {
            unsubscribe();
        }
    }

    async function runWithSupabase(fn) {
        unsub();

        unsubscribe = supabaseStore.subscribe(async (supabase) => {
            const { user, session, error } = await fn(supabase, {
                    email: username,
                    password,
                });
                
            console.log("runWithSupabase", user, session, error);
        });
    }

    async function login() {
        runWithSupabase((supabase, data) => supabase.auth.signIn(data));
    }

    
    async function signup() {
        runWithSupabase((supabase, data) => supabase.auth.signUp(data));
    }

    onDestroy(() => {
        unsub();
    });
</script>

<h1>
    <form on:submit|preventDefault={login}>
        <label for="username">E-Mail</label>
        <input
            id="username"
            type="text"
            placeholder="E-Mail"
            bind:value={username}
            maxlength="120"
            required
        />

        <label for="password">Passwort</label>
        <input
            id="password"
            type="password"
            bind:value={password}
            maxlength="60"
            required
        />

        <button type="submit">Login</button>
        <button type="button" on:click="{signup}">Signup</button>
    </form>
</h1>

<style>
</style>
