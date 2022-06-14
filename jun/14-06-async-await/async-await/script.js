async function getTeam() {
  
  const fetchPromise = fetch("https://raw.githubusercontent.com/fbw-d05/data/main/team")
  const response = await fetchPromise;
  const data = await response.text();

  renderTeam(data)
}

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
