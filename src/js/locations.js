import $ from "jquery";
import DataTable from "datatables.net-bs5";
import Choices from "choices.js";

window.$ = $;

$(document).ready(() => {
  new Choices("#choices-locations", { itemSelectText: "" });

  $("#locations").DataTable({
    responsive: true,
    ajax: "./data/locations.json",
    paging: true,
    searching: false,
    lengthChange: false,
    language: {
      info: "Pagina _PAGE_ di _PAGES_",
      paginate: {
        first: "Pagina iniziale",
        last: "Ultima pagina",
        next: "Pagina successiva",
        previous: "Pagina precedente",
      },
    },
    columns: [
      { data: "nome" },
      { data: "citta" },
      {
        data: "responsabili",
        render: (data) => {
          let html = ``;
          data.split(",").forEach((d) => (html = `${html} <div>${d}</div>`));
          return html;
        },
      },
      {
        data: "laboratori",
        render: (data) => {
          let html = ``;
          data.split(",").forEach((d) => (html = `${html} <div>- ${d}</div>`));
          return html;
        },
      },
      { data: "robot" },
      {
        targets: 1,
        data: null,
        defaultContent: `
        <div class="d-flex flex-fill align-items-center gap-3">
            <button class="btn btn-ligth text-primary icon-btn" type="button" title="Dettagli">
                <i class="fa fa-search"></i>
            </button>
            <button class="btn btn-ligth text-primary icon-btn" type="button" title="Cancella"><i class="fa fa-trash"></i></button>
           
        </div>
        `,
      },
    ],
  });
});
