// // Ein Item anlegen

// localStorage.setItem("Sprachauswahl","Deutsch")

// // Ein Item abfragen

// const language = localStorage.getItem("Sprachauswahl");
// console.log(language);

// // Ein Item löschen
// localStorage.removeItem("Sprachauswahl");

// Begrüßung
const greeting = () => {
  const user = localStorage.getItem("Benutzer");
  if (user != "") {
    document.querySelector("#greeting").innerHTML = "Hallo " + user;
  }
};

const saveName = () => {
  const name = document.querySelector("#name").value;
  localStorage.setItem("Benutzer", name);
  greeting();
};

greeting();

// Loscht den Nutzer und die localStorage
const deleteUser = () => {
    localStorage.removeItem("Benutzer");
    document.querySelector("#greeting").innerHTML = "Tschüss!"
}