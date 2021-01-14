let columns = 2;
let userColor = "";

// TO-DO
// colorAll cells doesn't always color all cells

let colorCell = (item) => {
  item.addEventListener("click", () => {
    console.log("cell clicked");
    item.style.backgroundColor = userColor;
  });
};

function addRow() {
  let table = document.getElementById("table");
  let row = document.createElement("tr");
  row.classList.add("row");
  row.setAttribute("id", "row");
  let allCells = document.querySelectorAll(".cell");
  let totalNumberOfCells = allCells.length;

  table.appendChild(row);
  for (let i = 0; i < columns; i++) {
    let cell = document.createElement("td");
    cell.classList.add("cell");
    cell.setAttribute("id", totalNumberOfCells + i + 1);
    colorCell(cell);
    row.appendChild(cell);
  }
} // end addRow

// let colorCell = (id) => {
//   let selectedCell = document.getElementById(id);
//   selectedCell.style.backgroundColor = userColor;
// }; // end colorCell

// the color selection onclick calls this method
let selectColor = (color) => {
  console.log(color);
  userColor = color;
}; // end selectColor

let addRowBtn = document.getElementById("addRow");
addRowBtn.onclick = () => {
  addRow();
}; // end addRowBtn

let addCol = () => {
  let rows = document.querySelectorAll(".row");
  columns++;
  let allCells = document.querySelectorAll(".cell");
  let totalNumberOfCells = allCells.length;

  for (let i = 0; i < rows.length; i++) {
    let cell = document.createElement("td");
    cell.classList.add("cell");
    cell.setAttribute("id", totalNumberOfCells + i + 1);
    colorCell(cell);
    rows[i].appendChild(cell);
  }
}; // end addCol

let addColBtn = document.getElementById("addCol");
addColBtn.onclick = () => {
  addCol();
}; // end addColBtn

let removeRow = () => {
  let allRows = document.querySelectorAll("#row");
  let lastRow = allRows[allRows.length - 1];
  lastRow.remove();
}; // end removeRow

let removeRowBtn = document.getElementById("removeRow");
removeRowBtn.onclick = () => {
  removeRow();
}; // end removeRowBtn

let removeCol = () => {
  let allRows = document.querySelectorAll("#row");
  if (columns > 0) columns--;

  allRows.forEach((row) => {
    row.lastElementChild.remove();
  });
}; // end removeCol

let removeColBtn = document.getElementById("removeCol");
removeColBtn.onclick = () => {
  removeCol();
}; // end removeColBtn

let colorAllBtn = document.getElementById("colorAllBtn");
colorAllBtn.onclick = () => {
  let allCells = document.querySelectorAll(".cell");
  // loop through all the cells and color each one
  allCells.forEach((cell) => {
    cell.style.backgroundColor = userColor;
  });
};

let colorAllUnclrdBtn = document.getElementById("colorAllUnclrdBtn");
colorAllUnclrdBtn.onclick = () => {
  let allCells = document.querySelectorAll(".cell");

  allCells.forEach((cell) => {
    if (cell.style.backgroundColor === "")
      cell.style.backgroundColor = userColor;
  });
};

let clearCellsBtn = document.getElementById("clearAllCells");
clearCellsBtn.onclick = () => {
  let allCells = document.querySelectorAll(".cell");
  allCells.forEach((cell) => {
    cell.style.backgroundColor = "";
  });
};
