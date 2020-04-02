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

function showAtonement() {
  const request = new XMLHttpRequest();
  request.open("get", "./atonement.json");
  request.onload = () => {
    try {
      const json = JSON.parse(request.responseText);
      populateTable(json, atonementDiv, atonementTable);
    } catch (e) {
      atonementDiv.innerHTML = "Could not load quotes."
    }
  };
  request.send();
}

function showAddiction() {
  const request = new XMLHttpRequest();
  request.open("get", "./addiction.json");
  request.onload = () => {
    try {
      const json = JSON.parse(request.responseText);
      populateTable(json, addictionDiv, addictionTable);
    } catch (e) {
      addictionDiv.innerHTML = "Could not load quotes."
    }
  };
  request.send();
}

function showService() {
  const request = new XMLHttpRequest();
  request.open("get", "./service.json");
  request.onload = () => {
    try {
      const json = JSON.parse(request.responseText);
      populateTable(json, serviceDiv, serviceTable);
    } catch (e) {
      serviceDiv.innerHTML = "Could not load quotes."
    }
  };
  request.send();
}

function showLaziness() {
  const request = new XMLHttpRequest();
  request.open("get", "./laziness.json");
  request.onload = () => {
    try {
      const json = JSON.parse(request.responseText);
      populateTable(json, lazinessDiv, lazinessTable);
    } catch (e) {
      lazinessDiv.innerHTML = "Could not load quotes."
    }
  };
  request.send();
}

function showRepentance() {
  const request = new XMLHttpRequest();
  request.open("get", "./repentance.json");
  request.onload = () => {
    try {
      const json = JSON.parse(request.responseText);
      populateTable(json, repentanceDiv, repentanceTable);
    } catch (e) {
      repentanceDiv.innerHTML = "Could not load quotes."
    }
  };
  request.send();
}

function showForgiveness() {
  const request = new XMLHttpRequest();
  request.open("get", "./forgiveness.json");
  request.onload = () => {
    try {
      const json = JSON.parse(request.responseText);
      populateTable(json, forgivenessDiv, forgivenessTable);
    } catch (e) {
      forgivenessDiv.innerHTML = "Could not load quotes."
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
    tableToFill.style.border = "solid #0000FF";
  });
}