<script>
  import { Link } from "svelte-routing";

  import { Datatable, rows } from "svelte-simple-datatables";

  const settings = {
    sortable: false,
    pagination: true,
    rowPerPage: 40,

    blocks: {
      searchInput: false,
      paginationButtons: true,
      paginationRowCount: false,
    },

    labels: {
      search: "Suchen...", // search input placeholer
      filter: "Filter", // filter inputs placeholder
      noRows: "Keine Einträge vorhanden",
      info:
        "Sichtbar sind die Einträge von {start} bis {end} von gesamt {rows}",
      previous: "<<",
      next: ">>",
    },
  };

  const data = [
    {
      date: new Date(2021, 2, 5),
      bodySet: false,
      bodyPoints: null,
      bodyText: null,
      mindSet: true,
      mindPoints: 10,
      mindText: "Meditiert mit ganz viel Omm und Zafu!",
    },
    {
      date: new Date(2021, 2, 6),
      bodySet: false,
      bodyPoints: 42,
      bodyText: "Kettlebell-Workout",
      mindSet: false,
      mindPoints: null,
      mindText: null,
    },
  ];
</script>

<style>
</style>

<h1>TABLE</h1>

<div>
  <Datatable settings="{settings}" data="{data}">
    <thead>
      <th data-key="date">date</th>
      <th data-key="bodySet">bodySet</th>
      <th data-key="bodyPoints">bodyPoints</th>
      <th data-key="bodyText">bodyText</th>
      <th data-key="mindSet">mindSet</th>
      <th data-key="mindPoints">mindPoints</th>
      <th data-key="mindText">mindText</th>
    </thead>
    <tbody>
      {#each $rows as row}
        <tr>
          <td>{row.date}</td>
          <td><input type="checkbox" checked="{row.bodySet}" disabled /></td>
          <td class="text-right">{row.bodyPoints}</td>
          <td>{row.bodyText}</td>
          <td><input type="checkbox" checked="{row.mindSet}" disabled /></td>
          <td class="text-right">{row.mindPoints}</td>
          <td style="max-width: 80px;" class="truncate"
            ><span title="{row.mindText}">{row.mindText}</span></td
          >
        </tr>
      {/each}
    </tbody>
  </Datatable>
</div>

<Link to="/details/new">Neuen Eintrag hinzufügen</Link>
