$(document).ready(() => {
  flatpickr("#date-from");
  flatpickr("#date-to");
  new Choices("#choices-labs", { itemSelectText: "" });

  var table = $("#screening").DataTable({
    responsive: true,
    ajax: "./data/screening.json",
    paging: true,
    searching: true,
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
    createdRow: (row, data) => {
      if (data.seriale_unknow && data.seriale_unknow === true) {
        $(row).addClass("warningRow");
      }
      if (data.stampa_failed && data.stampa_failed === true) {
        $(row).addClass("dangerRow");
      }
    },
    columns: [
      { data: "scansione" },
      {
        data: "seriale",
        render: (data, type, row) => {
          return `<div class="d-flex align-items-center gap-2">${data} ${
            row.seriale_unknow ? '<span class="ml-2 rounded-circle shadow-lg badge bg-warning"><i class="fa fa-question"></i></span>' : ""
          }</div>`;
        },
      },
      {
        data: "seriale_unknow",
        visible: false,
      },
      {
        data: "stampa_failed",
        visible: false,
      },
      {
        data: "progressivo",
        render: (data, type, row) => {
          return `<div class="d-flex align-items-center gap-2">${data} ${
            row.stampa_failed ? '<span class="ml-2 rounded-circle px-2 shadow-lg badge bg-danger"><i class="fa fa-exclamation"></i></span>' : ""
          }</div>`;
        },
      },
      { data: "checkin" },
      { data: "strappo" },
      { data: "attività" },
      {
        data: "lis",
        render: (lis) => {
          return lis ? '<span class="badge bg-primary rounded-circle shadow-lg" type="button" title="Invio a LIS"><i class="fa fa-check"></i></span> ' : "";
        },
      },
    ],
  });
  $("#filter-all").on("click", () => {
    table.search("").columns().search("").draw();
  });
  $("#filter-unknow")
    .off()
    .on("click", () => {
      //Reset filtri applicati in precedenza
      table.search("").columns().search("").draw();
      //Applica filtro
      table.search("").columns(2).search(true).draw();
    });
  $("#filter-failed")
    .off()
    .on("click", () => {
      //Reset filtri applicati in precedenza
      table.search("").columns().search("").draw();
      //Applica filtro
      table.columns(3).search(true).draw();
    });
});
