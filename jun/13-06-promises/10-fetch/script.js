// Daten laden

fetch("https://raw.githubusercontent.com/fbw-d05/data/main/team") // bei Fehler in url wird loadFailure durchgeführt
  // 1. Promise: Downnload wird beginnen
  .then((response) => {
    // Download hat begonnen

    // 2. Promise: Download wird beendet werden
    // und Antwort wird als Text zurückgegeben werden
    const dataPromise = response.text();

    if (!response.ok) throw new Error("Konnte nicht geladen werden");

    console.log(dataPromise);
    return dataPromise;
  })
  .then((data) => {
    renderTeam(data);
  }) // .then(renderTeam)
  .catch(loadingFailure);

// const fetchPromise = fetch("https://");
// fetchPromise
//     .then((response)=>response.text())
//     .then((data) => renderTeam(data))
//     .catch(loadingFailure());

function renderTeam(team) {
  // Beide Promises sind eingelöst
  const teamMates = team.split(",");

  const list = document.createElement("ul");
  teamMates.forEach((firstName) => {
    const li = document.createElement("li");
    li.textContent = firstName;
    list.appendChild(li);
  });
  document.body.appendChild(list);
}

function loadingFailure() {
  const errorMessage = document.createElement("h2");
  errorMessage.style.color = "red";
  errorMessage.textContent = "Daten konnten nicht geladen werden!";
  document.body.appendChild(errorMessage);
}
