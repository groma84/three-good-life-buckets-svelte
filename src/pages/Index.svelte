<script>
    import { onDestroy } from "svelte";
    import { supabaseStore } from "../stores/supabase";
    import { createClient } from '@supabase/supabase-js'

    let username = "";
    let password = "";

    let unsubscribe;

    async function login() {
        console.log("login called");

        if (unsubscribe) {
            unsubscribe();
        }

        const options = { }
        const supabase = createClient("https://esharnypcauxnoqqttsj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNDE0NTk5OSwiZXhwIjoxOTI5NzIxOTk5fQ.T7Esw85b3idpoiv036-Q-c1-MEi_2vvezXA-GY7mKiU", options)

        const { user, session, error } = await supabase.auth.signIn(
                {
                    email: username,
                    password,
                }
            );

            console.log("login", user, session, error);

        // unsubscribe = supabaseStore.subscribe(async (store) => {
        //     const { user, session, error } = await supabase.auth.signUp(
        //         {
        //             email: username,
        //             password,
        //         },
        //         {
        //             redirectTo: "http://localhost:8080/settings",
        //         }
        //     );

        //     console.log("login", user, session, error);
        // });
    }

    onDestroy(() => {
        if (unsubscribe) {
            unsubscribe();
        }
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
    </form>
</h1>

<style>
</style>
