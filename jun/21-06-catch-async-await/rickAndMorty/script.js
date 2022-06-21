const figure = document.querySelector("figure");
const img = document.createElement("img");
const fig = document.createElement("figcaption");
fig.style.fontFamily = "Poppins";
fig.style.fontSize = "1.5rem";
fig.style.color = "blue";
fig.style.textAlign = "center";

const url = `https://rickandmortyapi.com/api/character`;

async function randomCharacter() {
  try {
    const randNum = Math.floor(Math.random() * 1000) + 1;
    const response = await fetch(`${url}/${randNum}`);

    if (!response.ok)
      throw new Error(
        `Konnte nicht geladen werden! Character #${randNum} existiert nicht!`
      );

    const data = await response.json();

    pickCharacter(data);
  } catch (error) {
    // console.error(error)
    const errorMessage = document.createElement("h2");
    errorMessage.style.color = "red";
    errorMessage.textContent = error.message;

    document.body.prepend(errorMessage);
  }
}

const pickCharacter = (character) => {
  img.src = character.image;
  fig.textContent = character.name;

  figure.appendChild(img);
  figure.appendChild(fig);
};

randomCharacter();
