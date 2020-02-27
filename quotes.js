const familyDiv = document.getElementById('familyDiv');

function showFamily() {
  fetch("./quotes.json")
  .then(function(resp){
    return resp.json();
  })
  .then(function(data) {
    for (let i = 0; i < data.familyQuotes.length; i++) {
      familyDiv.innerHTML = JSON.stringify(data.familyQuotes[i]);
      console.log(data.familyQuotes[i]);
    }
  });
}

function showAgency() {
  document.getElementById('agencyDiv').innerHTML = "Agency";
}
