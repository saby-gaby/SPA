const jokes = require("jokes");
const rmeme = require("rmeme");

const joke = jokes();

document.querySelector("#joke").textContent = joke.text;

rmeme.meme()
  .then((url) => {
    const memeImg = document.querySelector("#meme-img");
    memeImg.src = url;
  })
  .catch((error) => console.log(error));
