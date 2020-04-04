const displayDiv = document.getElementById('categories');
const displayTable = document.getElementById('displayTable');

function showQuotes(topic) {
  switch (topic) {
    case "Family":
      showFamily();
      break;
    case "Agency":
      showAgency();
      break;
    case "Atonement":
      showAtonement();
      break;
    case "Addiction":
      showAddiction();
      break;
    case "Service":
      showService();
      break;
    case "Laziness":
      showLaziness();
      break;
    case "Repentance":
      showRepentance();
      break;
    case "Forgiveness":
      showForgiveness();
      break;
  }
}

function showFamily() {
  const request = new XMLHttpRequest();
  request.open("get", "./family.json");
  request.onload = () => {
    try {
      const json = JSON.parse(request.responseText);
      populateTable(json, displayDiv, displayTable);
    } catch (e) {
      displayDiv.innerHTML = "Could not load quotes."
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
      populateTable(json, displayDiv, displayTable);
    } catch (e) {
      displayDiv.innerHTML = "Could not load quotes."
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
      populateTable(json, displayDiv, displayTable);
    } catch (e) {
      displayDiv.innerHTML = "Could not load quotes."
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
      populateTable(json, displayDiv, displayTable);
    } catch (e) {
      displayDiv.innerHTML = "Could not load quotes."
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
      populateTable(json, displayDiv, displayTable);
    } catch (e) {
      displayDiv.innerHTML = "Could not load quotes."
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
      populateTable(json, displayDiv, displayTable);
    } catch (e) {
      displayDiv.innerHTML = "Could not load quotes."
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
      populateTable(json, displayDiv, displayTable);
    } catch (e) {
      displayDiv.innerHTML = "Could not load quotes."
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
      populateTable(json, displayDiv, displayTable);
    } catch (e) {
      displayDiv.innerHTML = "Could not load quotes."
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