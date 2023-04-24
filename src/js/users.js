import $ from "jquery";
import DataTable from "datatables.net-bs5";
import Choices from "choices.js";

window.$ = $;

$(document).ready(() => {
  new Choices("#choices-users", { itemSelectText: "" });
  new Choices("#choices-labs", { itemSelectText: "" });
  $("#users").DataTable({
    responsive: true,
    ajax: "./data/user.json",
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
      { data: "cognome" },
      { data: "nome" },
      { data: "titolo" },
      { data: "email" },
      { data: "ruolo" },
      { data: "telefono" },
      { data: "struttura" },
      { data: "laboratorio" },
      {
        targets: 1,
        data: null,
        defaultContent: `
        <div class="d-flex flex-fill align-items-center gap-3">
            <button class="btn btn-ligth text-primary icon-btn" type="button" title="Dettagli">
                <i class="fa fa-search"></i>
            </button>
            <button class="btn btn-ligth text-primary icon-btn" type="button" title="Cancella"><i class="fa fa-trash"></i></button>
            <label class="toggle-switch">
                <input type="checkbox">
                <div class="toggle-switch-background">
                    <div class="toggle-switch-handle"></div>
                </div>
            </label>
        </div>
        `,
      },
    ],
  });
});
