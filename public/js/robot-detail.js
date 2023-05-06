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
});
