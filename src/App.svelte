<script>
  import "./TailwindStyles.svelte";
  import { Router, Link, Route } from "svelte-routing";

  import Index from "./pages/Index.svelte";
  import Impressum from "./pages/Impressum.svelte";
  import Graph from "./pages/Graph.svelte";
  import Table from "./pages/Table.svelte";
  import Settings from "./pages/Settings.svelte";
  import Faq from "./pages/FAQ.svelte";
  import Details from "./pages/Details.svelte";
  import Alerts from "./pages/Alerts.svelte";

  export let url = "";
</script>

<Router {url}>
  <nav>
    <Link to="/">Index</Link>
    <Link to="impressum">Impressum</Link>
    <Link to="graph">Graph</Link>
    <Link to="table">Table</Link>
    <Link to="settings">Settings</Link>
    <Link to="faq">FAQ</Link>
    <Link to="details/2021-02-22">Details</Link>
  </nav>

  <div>
    <Alerts />

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
</Router>

<style>
</style>
