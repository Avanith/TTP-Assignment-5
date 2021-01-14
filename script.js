let columns = 2;

function addRow() {
  let table = document.getElementById("table");
  let row = document.createElement("tr");
  row.classList.add("row");
  row.setAttribute("id", "row");

  table.appendChild(row);
  for (let i = 0; i < columns; i++) {
    let cell = document.createElement("td");
    cell.classList.add("cell");
    row.appendChild(cell);
  }
}

let addRowBtn = document.getElementById("addRow");
addRowBtn.onclick = () => {
  addRow();
};

let addCol = () => {
  let rows = document.querySelectorAll(".row");
  columns++;
  for (let i = 0; i < rows.length; i++) {
    let cell = document.createElement("td");
    cell.classList.add("cell");
    rows[i].appendChild(cell);
  }
};

let addColBtn = document.getElementById("addCol");
addColBtn.onclick = () => {
  addCol();
};

let removeRow = () => {
  let allRows = document.querySelectorAll("#row");
  let lastRow = allRows[allRows.length - 1];
  lastRow.remove();
};

let removeRowBtn = document.getElementById("removeRow");
removeRowBtn.onclick = () => {
  removeRow();
};

let removeCol = () => {
  let allRows = document.querySelectorAll("#row");
  columns--;
  allRows.forEach((row) => {
    row.lastElementChild.remove();
  });
};

let removeColBtn = document.getElementById("removeCol");
removeColBtn.onclick = () => {
  removeCol();
};
