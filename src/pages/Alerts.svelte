<script>
  import { alerts } from "../stores/alerts.js";

  function removeAlert(alertId) {
    alerts.remove(alertId);
  }
</script>

<h1>
  ALERTS
  <ul>
    {#each $alerts as item}
      <li>
        #{item.id}: {item.type}: {item.message}
        <button type="button" on:click={removeAlert(item.id)}>X</button>
      </li>
    {/each}
  </ul>
</h1>

<style>
</style>
