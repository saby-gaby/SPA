const form = document.querySelector('form');
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");
const postsContainer = document.querySelector("#postsContainer")

async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    console.log(posts);

    posts.forEach(element => {
        const post = renderPost(element.title, element.body, element.id);
                
        postsContainer.appendChild(post)
    });
}

function renderPost(title, content, id) {
    const post = document.createElement("div");
    const titleElement = document.createElement("h2");
    const contenetElement = document.createElement("p");
    
    title.textContent = title;
    contenet.textContent = content;
    
    post.id = 'post' + element.id;

    post.appendChild(titleElement);
    post.appendChild(contenetElement);

    return post;
}

getPosts()

form.addEventListener('submit', createPost);

async function createPost(event) {
    event.preventDefault();

    const title = titleInput.value;
    const postContent = bodyInput.value;

    console.log(title, postContent);

    const payload = {
        body: postContent,
        title: title,
        userId: 1
    }

    // Daten an Server schicken

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    const data = response.json(data.title, data.body, data.id);
    
    postsContainer.append(post);


}