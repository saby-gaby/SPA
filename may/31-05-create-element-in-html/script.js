const navString = prompt("Navigation");
const navItems = navString.split(",");
const nav=document.querySelector("header nav")

// Element erzeugen
const listElement = document.createElement("ul");

navItems.forEach((item,index) => {
    const liElement = document.createElement("li")

    // Text ins Element einfugen 
    liElement.textContent = item;

    // Die class property andern 
    liElement.classList.add("nav-element");
    listElement.appendChild(liElement);

    if (index === 0) {
        liElement.classList.add("active")
    }
})
console.log(nav.classList);

nav.classList.add("big","animate")

//Element in DOM einfügen
nav.appendChild(listElement)