$(document).ready(() => {
  $("#labs-detail").DataTable({
    ajax: "./data/labs.json",
    responsive: true,
    paging: false,
    info: false,
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
      { data: "manager" },
      {
        data: "stato",
        render: (data) => {
          return `<div class="d-flex align-items-center gap-2"><div>${data}</div>${
            data === "Attivo" ? `<div class="status success"></div>` : '<div class="status failed"></div>'
          }</div>`;
        },
      },
      {
        data: "robot",
        render: (data) => {
          let htmlImg = ``;
          data.forEach((robot) => {
            htmlImg = `
              ${htmlImg}                
              <div class="robot-avatar small primary">
               <img src="./img/kronos.png" title="${robot.nome}" alt="${robot.nome}" />
              </div>
          `;
          });
          return `
       <div class="d-flex gap-4 align-items-center">
          <div class="d-flex gap-2 align-items-center">
              ${htmlImg}
          </div>
      </div>
    `;
        },
      },
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
