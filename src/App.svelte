<script>
  import "./TailwindStyles.svelte";
  import { Router, Route } from "svelte-routing";
  import { session } from "./stores/session";

  import Index from "./pages/Index.svelte";
  import Impressum from "./pages/Impressum.svelte";
  import Graph from "./pages/Graph.svelte";
  import Table from "./pages/Table.svelte";
  import Settings from "./pages/Settings.svelte";
  import Faq from "./pages/FAQ.svelte";
  import Details from "./pages/Details.svelte";
  import Alerts from "./pages/Alerts.svelte";
  import Header from "./pages/Header.svelte";

  export let url = "";
</script>


<Router {url}>
  <Header />

  <Alerts />

  {#if $session}
    <div>
      <Route path="impressum" component={Impressum} />
      <Route path="graph" component={Graph} />
      <Route path="table" component={Table} />
      <Route path="settings" component={Settings} />
      <Route path="faq" component={Faq} />
      <Route path="details/:date" let:params>
        <Details date={params.date} />
      </Route>
      <Route path="/"><Index /></Route>
    </div>
  {:else}
    NO SESSION FOUND<br />

    <Index />
  {/if}
</Router>

<style>
</style>
