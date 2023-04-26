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

import DataTables from "datatables.net-responsive";

$("#activities-widget").DataTable({
  responsive: true,
  paging: false,
  info: false,
  searching: false,
  lengthChange: false,
  //   drawCallback: function () {
  //     $(this.api().table().header()).hide();
  //   },
});
