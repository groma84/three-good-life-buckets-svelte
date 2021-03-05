<script>
  import { onDestroy } from "svelte";
  import { supabase } from "../stores/supabase";
  import { alerts } from "../stores/alerts";

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

    unsubscribe = supabase.subscribe(async (supabase) => {
      const { user, session, error } = await fn(supabase, {
        email: username,
        password,
      });
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

  function createSuccess() {
    alerts.add({
      type: "success",
      message: "Registrierung erfolgreich!",
    });
  }
</script>

<style>
</style>

<div class="flex flex-col content-center max-w-sm">
  <h1 class="font-serif text-2xl">Good Life Manager</h1>

  <form on:submit|preventDefault="{login}">
    <ul>
      <li>
        <label for="username" class="w-24 inline-block">E-Mail</label>
        <input
          class="w-60 inline-block p-2 placeholder-blue-200 border-solid border-2 border-blue-700"
          id="username"
          type="text"
          placeholder="E-Mail"
          bind:value="{username}"
          maxlength="120"
          required
        />
      </li>
      <li>
        <label for="password" class="w-24 inline-block">Passwort</label>
        <input
          id="password"
          type="password"
          placeholder="Passwort"
          bind:value="{password}"
          maxlength="60"
          required
        />
      </li>
    </ul>

    <div>
      <button type="submit">Login</button>
      <button type="button" on:click="{signup}">Signup</button>
    </div>
  </form>
</div>
