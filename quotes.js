const familyTable = document.getElementById('familyTable');
const familyDiv = document.getElementById('familyDiv');

// function showFamily() {
//   fetch("./quotes.json")
//   .then(function(resp){
//     return resp.json();
//   })
//   .then(function(data) {
//     for (let i = 0; i < data.familyQuotes.length; i++) {
//       familyDiv.innerHTML = JSON.stringify(data.familyQuotes[i]);
//       console.log(data.familyQuotes[i]);
//     }
//   });
// }

function showFamily() {
  const request = new XMLHttpRequest();
  request.open("get", "./quotes.json");
  request.onload = () => {
    try {
      const json = JSON.parse(request.responseText);
      populateTable(json, familyDiv);
    } catch (e) {
      familyDiv.innerHTML = "Could not load quotes."
    }
  };
  request.send();
}

function populateTable(json, divToFill) {
while (familyTable.firstChild) {
  familyTable.removeChild(familyTable.firstChild);
}
  json.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    familyTable.appendChild(tr);
  });
}

function showAgency() {
  document.getElementById('agencyDiv').innerHTML = "Agency";
}
