const buttons = document.querySelectorAll(".concert-list li button");

buttons.forEach((button) => button.addEventListener("click", selectConcert));

function selectConcert(event /* Event Object */) {
  // das ausgewählte Konzert hervorheben
  // console.log("click", event);
  const button = event.target;

  // parent, egal auf welcher Ebene
  const concert = button.closest("li"); // .parentNode -> für direkten parent

  // suchen innerhalb vom li
  const title = concert.querySelector(".title");

  const canceled = concert.querySelector(".canceled");

  // Pruefen auf Kind
  const containsCanceled = concert.contains(canceled);
  if (containsCanceled) return;

  // Auf Ubereinstimmung mit Selector prüfen
  const matchesCanceledSelector = concert.matches(".canceled");
  if (matchesCanceledSelector) return;

  // Alle kinder wählen
  const children = concert.children;
  for (let i = 0; i < children.length; i++) {
    children[i].style.color = "white";
  }
  console.log("click", children);
  console.log("click", event);
  concert.style.backgroundColor = "red";
  title.style.backgroundColor = "orange";

  // Nächstes Element
  const next = concert.nextElementSibling;
  next.style.backgroundColor = "blue";

  // Vorheriges Element
  const previous = concert.previousElementSibling;
  previous.style.backgroundColor = "violet";
}
