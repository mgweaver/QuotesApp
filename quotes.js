const familyDiv = document.getElementById('familyDiv');
const agencyDiv = document.getElementById('agencyDiv');
const atonementDiv = document.getElementById('atonementDiv');
const addictionDiv = document.getElementById('addictionDiv');
const serviceDiv = document.getElementById('serviceDiv');
const lazinessDiv = document.getElementById('lazinessDiv');
const repentanceDiv = document.getElementById('repentanceDiv');
const forgivenessDiv = document.getElementById('forgivenessDiv');

const familyTable = document.getElementById('familyTable');
const agencyTable = document.getElementById('agencyTable');
const atonementTable = document.getElementById('atonementTable');
const addictionTable = document.getElementById('addictionTable');
const serviceTable = document.getElementById('serviceTable');
const lazinessTable = document.getElementById('lazinessTable');
const repentanceTable = document.getElementById('repentanceTable');
const forgivenessTable = document.getElementById('forgivenessTable');

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
    tableToFill.removeChild(tableToFill.firstChild);
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