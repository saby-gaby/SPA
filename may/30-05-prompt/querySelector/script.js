const color = prompt("Welche Farbe?");
const colorSec = prompt("Farbe für die sections?");

// get body element --> element in HTML finden
const body = document.querySelector("body");
// Element-Style andern
body.style.backgroundColor = color;

console.log(body);

const sections = document.querySelectorAll("section")
sections.forEach(sec=>sec.style.backgroundColor = colorSec)

