import $ from "jquery";
import DataTable from "datatables.net-responsive";
import Choices from "choices.js";

window.$ = $;

$(document).ready(() => {
  new Choices("#choices-types", { itemSelectText: "" });
  new Choices("#choices-labs", { itemSelectText: "" });
  $("#activities").DataTable({
    responsive: true,
    ajax: "./data/activities.json",
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
      {
        data: "attività",
        render: (data) => {
          let html = ``;
          data.giorni.forEach(
            (g) =>
              (html = `${html} <button type="button" title="${Object.keys(g)[0]}" class="d-flex align-items-center badge badge-btn ${
                Object.values(g)[0] ? "bg-primary" : "bg-secondary"
              }">${Object.keys(g)[0]}</button>`)
          );

          return ` 
            <div class="mb-2 text-primary">${data.nome}</div>
            <div class="d-flex gap-2">
                <div class="d-flex gap-1">
                   ${html}
                </div>
                <small class="text-muted">${data.orari}</small>
            </div>
          `;
        },
      },
      { data: "esecuzione" },
      {
        data: "robot",
        render: (data) => {
          let htmlImg = ``;
          let html = ``;
          data.forEach((robot) => {
            htmlImg = `
                    ${htmlImg}                
                    <div class="robot-avatar small primary">
                     <img src="./img/robot.png" title="${robot.nome}" alt="${robot.nome}" />
                    </div>
                `;
            html = `${html} <div class="text-muted">${robot.nome} - ${robot.laboratorio}</div>`;
          });
          return `
             <div class="d-flex gap-4 align-items-center">
                <div class="d-flex gap-2 align-items-center">
                    ${htmlImg}
                </div>
                <div class="d-flex flex-column">
                    ${html}
                </div>
                
            </div>
          `;
        },
      },

      {
        targets: 1,
        data: null,
        render: (data) => {
          if (data.id === 1) {
            return `
                <div class="d-flex flex-fill align-items-center gap-3">
                    <button class="btn btn-ligth text-primary icon-btn" type="button" title="Dettagli">
                        <i class="fa fa-search"></i>
                    </button>  
                    <div class="badge bg-primary">In corso</div>         
                </div>
        `;
          }
          return `
                <div class="d-flex flex-fill align-items-center gap-3">
                    <button class="btn btn-ligth text-primary icon-btn" type="button" title="Dettagli">
                        <i class="fa fa-search"></i>
                    </button>  
                    <label class="toggle-switch">
                        <input type="checkbox">
                        <div class="toggle-switch-background">
                            <div class="toggle-switch-handle"></div>
                        </div>
                    </label>
                    <button class="btn btn-sm btn-primary rounded-circle" type="button" title="Azione"><i class="fa fa-play"></i></button>         
                </div>
        `;
        },
      },
    ],
  });
});
