const api1 = fetch(
  "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
);
const api2 = fetch("https://dog.ceo/api/breeds/image/random");
const api3 = fetch("https://api.zippopotam.us/us/33162");

const demo = async () => {
    const res = await await fetch(api1)
    const data = await res.json()
}

const fetchData = async () => {
    const response = await Promise.all([api1, api2, api3]);
    console.log(response);
    const data = await Promise.all(response.map(x=>x.json()))
    console.log(data);
    // alternative:
    // const data = await response[0].json()
    // const data1 = await response[1].json()
    // const data2 = await response[2].json()
    // console.log(data, data1, data2);

    document.querySelector("#demo").innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src=${data[1].message} class="card-img-top" alt="pic">
  <div class="card-body">
    <h5 class="card-title">Hi i am from ${data[2].country}</h5>
    <p class="card-text">${data[0].source[0].annotations.source_description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `;
};

fetchData()