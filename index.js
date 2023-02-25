var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");
menu_btn.addEventListener("click", () => {
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-cont");
});




const table = document.getElementById("my-table");
const rows = table.getElementsByTagName("tr");
const statusFilter = document.getElementById("status-filter");
statusFilter.addEventListener("change", function() {
  const selectedValue = statusFilter.value;
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const statusCell = row.cells[1];
    if (selectedValue === "all" || statusCell.textContent === selectedValue) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
});
//dynamic time not available
const addTimeHeader = table.querySelector("th:nth-child(3)");
addTimeHeader.addEventListener("click", function() {
  const sortedRows = Array.from(rows).slice(1);
  const sortOrder = addTimeHeader.getAttribute("data-order") === "asc" ? "desc" : "asc";
  sortedRows.sort((a, b) => {
    const aTime = new Date(a.cells[2].textContent).getTime();
    const bTime = new Date(b.cells[2].textContent).getTime();
    return sortOrder === "asc" ? aTime - bTime : bTime - aTime;
  });
  for (let i = 0; i < sortedRows.length; i++) {
    table.tBodies[0].appendChild(sortedRows[i]);
  }
  addTimeHeader.setAttribute("data-order", sortOrder);
});
