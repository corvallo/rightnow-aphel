import $ from "jquery";
import DataTable from "datatables.net-bs5";
import Choices from "choices.js";

window.$ = $;

$(document).ready(() => {
  new Choices("#choices-types", { itemSelectText: "" });
  new Choices("#choices-active", { itemSelectText: "" });
});
