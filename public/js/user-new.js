$(document).ready(() => {
  new Choices("#choices-title", { itemSelectText: "" });
  new Choices("#choices-locations", { itemSelectText: "" });
  new Choices("#choices-role", { itemSelectText: "" });
  new Choices("#choices-lab", {
    itemSelectText: "",
    removeItemButton: true,
    noResultsText: "Nessun risultato",
    noChoicesText: "Nessun valore tra cui scegliere",
    itemSelectText: "Seleziona",
    uniqueItemText: "Possono essere aggiunti solo valori univi",
    customAddItemText: "Possono essere aggiunti solo valori che soddisfano parametri specifici",
  });
});
