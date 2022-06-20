// Fetch von API

const apiCharactersURL = "https://rickandmortyapi.com/api/character ";
let images;

const rickMortyCharacters = async () => {
    const response = await fetch(apiCharactersURL)
    const data = await response.json()
        
        renderCharacters(data)
}

/* fetch(apiCharactersURL)
  // .then(response => response.text())
  // .then((responseString) => {
  //     // parsed Object   // String
  //     const obj = JSON.parse(responseString)
  //
  //     renderCharacters(obj)
  // })
  .then((response) => response.json()) // json Methode von fetch response macht JSON.parse()
  .then((obj) => renderCharacters(obj))
  .then((images) => console.log(images)); 
*/

function renderCharacters(data) {
  images = data.results.map((character) => character.image);

  data.results.forEach((character) => {
    const img = document.createElement("img");
    img.src = character.image;

    document.body.appendChild(img);
  });
}

rickMortyCharacters().then(() => {
    console.log(images);
})