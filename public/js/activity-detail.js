$(document).ready(() => {
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
                <button class="btn icon-btn text-primary delete-activity-schedule" type="button" title="Cancella programmazione"><i class="fa fa-trash"></i></button>
            </div>
            </div>
        </div>
        `;
      $("#activity-schedule").append(html);

      $(".delete-activity-schedule")
        .off()
        .on("click", function () {
          const index = $(this).parents(".schedule").data("index");
          $("#activity-schedule").find(`[data-index="${index}"]`).remove();
        });
    });
  $(".delete-activity-schedule")
    .off()
    .on("click", function () {
      const index = $(this).parents(".schedule").data("index");
      $("#activity-schedule").find(`[data-index="${index}"]`).remove();
    });

  $("#add-activity-task")
    .off()
    .on("click", () => {
      const html = `
    <div class="task">
      <div class="task-robot">
        <div class="robot-avatar primary">
          <img src="./img/kronos.png" title="Mario Robot" alt="Mario Robot" />
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
