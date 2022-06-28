// bei gitHub im settings -> Developer Settings -> OAuth Apps -> new OAuth App -> name und http://localhost -> register -> generate a new client secret

const id = "d318a3113e3636b7423c";
const clientSecret = "3701d61bdac2338676e753170d6c0ee78fc5e24b";



// HTML select DOM
const input = document.querySelector("#inputDemo");
const button = document.querySelector("#search");


// btn click event
button.addEventListener("click", getData);



async function getData(e) {
    const url = `http://api.github.com/users/${input.value}/repos?client_id=${id}&client_secret=${clientSecret}`;
    e.preventDefault();
    input.value = "";
    
    const result = await fetch(url);
    const data = await result.json();

    console.log(data);

    if (data.length > 1) {
        
        const githubResult = document.querySelector("#result");
        githubResult.textContent = "";
        
        data.map(x => {
            githubResult.innerHTML += `
            <div class="h-100 p-5 text-white bg-dark rounded-3 m-3">
          <h2 class="text-danger">${x.name}</h2>
          <p class="text-primary display-7">${x.description}</p>
          <a href=${x.clone_url} target="_blank"><button class="btn btn-outline-light btn-success" type="button">GitHub Repo</button>
        </div></a>
        `
        })
    }
}

