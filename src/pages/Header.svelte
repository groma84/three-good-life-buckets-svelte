<script>
  import { Link } from "svelte-routing";
  import { supabase } from "../stores/supabase";
  import { session } from "../stores/session";

  function logout() {
    $supabase.auth.signOut();
  }
</script>

HEADER
<nav>
  {#if $session}<button type="button" on:click={logout}>Logout</button>{/if}
  <Link to="/">Index</Link>
  <Link to="impressum">Impressum</Link>
  <Link to="graph">Graph</Link>
  <Link to="table">Table</Link>
  <Link to="settings">Settings</Link>
  <Link to="faq">FAQ</Link>
  <Link to="details/2021-02-22">Details</Link>
</nav>

<style></style>
