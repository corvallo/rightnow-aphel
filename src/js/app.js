import "../scss/app.scss";

// AdminKit (required)
import "./modules/bootstrap";
import "./modules/sidebar";
import "./modules/theme";
// import "./modules/feather";

// Forms
import "./modules/flatpickr";
import "./users";
import "./locations";
import "./activities";
import "./screening";
import Choices from "choices.js";
import $ from "jquery";
import DataTable from "datatables.net-responsive";
window.$ = $;
$(document).ready(() => {
  new Choices("#choices-places", { itemSelectText: "" });
  $("#volumeRange")
    .off()
    .on("input", (e) => {
      const value = e.currentTarget.value;
      $("#volumeValue").html(`${value}%`);
    })
    .on("change", (e) => {
      const value = e.currentTarget.value;
      $("#volumeValue").html(`${value}%`);
    });
  $("#velocityRange")
    .off()
    .on("input", (e) => {
      const value = e.currentTarget.value;
      $("#velocityValue").html(`${value}%`);
    })
    .on("change", (e) => {
      const value = e.currentTarget.value;
      $("#velocityValue").html(`${value}%`);
    });

  $("#activities-widget").DataTable({
    responsive: true,
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
  });

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
                   <img src="./img/robot.png" title="${robot.nome}" alt="${robot.nome}" />
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
  $("#add-activity-schedule")
    .off()
    .on("click", () => {
      const lastIndex = $("#activity-schedule .schedule:last").data("index");
      const html = `
      <div class="schedule mb-2" data-index="${lastIndex + 1}">
        <div class="schedule-box">
          <span class="schedule-box-title">Giorni</span>
          <div class="schedule-box-content schedule-days">
            <button type="button" title="LU" class="d-flex align-items-center badge-btn badge bg-primary">LU</button>
            <button type="button" title="MA" class="d-flex align-items-center badge-btn badge bg-darkblue">MA</button>
            <button type="button" title="ME" class="d-flex align-items-center badge-btn badge bg-secondary">ME</button>
            <button type="button" title="GI" class="d-flex align-items-center badge-btn badge bg-primary">GI</button>
            <button type="button" title="VE" class="d-flex align-items-center badge-btn badge bg-secondary">VE</button>
            <button type="button" title="SA" class="d-flex align-items-center badge-btn badge bg-primary">SA</button>
            <button type="button" title="DO" class="d-flex align-items-center badge-btn badge bg-primary">DO</button>
          </div>
        </div>
        <div class="schedule-box">
          <span class="schedule-box-title">Orari</span>
          <div class="schedule-box-content schedule-times">
            <span class="text-primary">Dalle</span>
            <input type="time" id="da" name="da" />
            <span class="text-primary">Alle</span>
            <input type="time" id="a" name="a" />
          </div>
        </div>
        <div class="schedule-box schedule-days">
          <span class="schedule-box-title">Loop</span>
          <div class="schedule-box-content">
            <label class="toggle-switch">
              <input type="checkbox" />
              <div class="toggle-switch-background">
                <div class="toggle-switch-handle"></div>
              </div>
            </label>
          </div>
        </div>
        <div class="schedule-box">
          <span class="schedule-box-title">&nbsp;</span>
          <div class="schedule-box-content schedule-actions">
            <button class="btn icon-btn text-primary" type="button" title="Cancella programmazione"><i class="fa fa-trash"></i></button>
          </div>
        </div>
      </div>
    `;
      $("#activity-schedule")
        .promise()
        .append(html)
        .done(() => {
          $("#delete-activity-schedule")
            .off()
            .on("click", function () {
              const index = $(this).parents(".schedule").data("index");
              $("#activity-schedule").find(`[data-index="${index}"]`).remove();
            });
        });
    });
  $("#delete-activity-schedule")
    .off()
    .on("click", function () {
      const index = $(this).parents(".schedule").data("index");
      $("#activity-schedule").find(`[data-index="${index}"]`).remove();
    });
  $("#add-activity-task")
    .off()
    .on("click", () => {
      console.log("QUI");
      const html = `
        <div class="task">
          <div class="task-robot">
            <div class="robot-avatar primary">
              <img src="./img/robot.png" title="Mario Robot" alt="Mario Robot" />
            </div>
          </div>
          <div class="task-detail">
            <div>Trasporto da <span class="text-primary fw-bold">Controllo</span> a <span class="text-primary fw-bold">Check-in</span></div>
            <div class="text-muted">Mario robot - Laboratorio analisi</div>
          </div>
          <div class="task-actions">
            <button type="button" class="text-primary icon-btn btn btn-sm"><i class="fa fa-search"></i></button>
            <button type="button" class="text-primary icon-btn btn btn-sm"><i class="fa fa-trash"></i></button>
          </div>
        </div>
    `;
      $("#tasks").append(html);
    });
});
