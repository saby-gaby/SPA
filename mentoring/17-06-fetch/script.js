async function getResponse() {
  const response = await await fetch("https://randomuser.me/api/");
  const data = await response.json();
  // console.log(response);
  // console.log(data.results[0].name.first);
  console.log(data.results[0]);
  document.querySelector("img").src = data.results[0].picture.large;
  document.querySelector(
    "h5"
  ).textContent = `${data.results[0].name.first} ${data.results[0].name.last}`;
  document.querySelector("p").textContent += data.results[0].email;
  document.querySelector("span").textContent = data.results[0].phone;
  document.querySelector("h6.card-title").textContent = `${data.results[0].location.city}, ${data.results[0].location.country}`;
} 

getResponse();

/* 
fetch("https://randomuser.me/api/")
  .then((response) => response.json())
    .then((data) => {
      document.querySelector("img").src = data.results[0].picture.large;
      document.querySelector(
        "h5"
      ).textContent = `${data.results[0].name.first} ${data.results[0].name.last}`;
      document.querySelector("p").textContent += data.results[0].email;
      document.querySelector("span").textContent = data.results[0].phone;
      document.querySelector(
        "h6.card-title"
      ).textContent = `${data.results[0].location.city}, ${data.results[0].location.country}`;
  });
 */