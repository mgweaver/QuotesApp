const familyDiv = document.getElementById('familyDiv');
const agencyDiv = document.getElementById('agencyDiv');
const agencyTable = document.getElementById('agencyTable');
const familyTable = document.getElementById('familyTable');

function showFamily() {
  const request = new XMLHttpRequest();
  request.open("get", "./family.json");
  request.onload = () => {
    try {
      const json = JSON.parse(request.responseText);
      populateTable(json, familyDiv, familyTable);
    } catch (e) {
      familyDiv.innerHTML = "Could not load quotes."
    }
  };
  request.send();
}

function showAgency() {
  const request = new XMLHttpRequest();
  request.open("get", "./agency.json");
  request.onload = () => {
    try {
      const json = JSON.parse(request.responseText);
      populateTable(json, agencyDiv, agencyTable);
    } catch (e) {
      agencyDiv.innerHTML = "Could not load quotes."
    }
  };
  request.send();
}

function populateTable(json, divToFill, tableToFill) {
  while (tableToFill.firstChild) {
    tableToFill.removeChild(familyTable.firstChild);
  }
  json.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    tableToFill.appendChild(tr);
  });
}