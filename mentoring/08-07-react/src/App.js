/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import whiskeyPic from "./images/whiskey.jpg";
import hazelPic from "./images/hazel.jpg";
import tubbyPic from "./images/tubby.jpg";
import Nav from "./Header.js"
import Carousel from "./Carousel"

const dogs = [
  {
    name: "whiskey",
    id: 0,
    image: whiskeyPic,
    age: 4,
    facts: [
      "Whiskey loves eating popcorn",
      "Whiskey is a terrible guard dog",
      "Whiskey wants to cuddle with you",
    ],
  },
  {
    name: "hazel",
    id: 1,
    age: 0,
    image: hazelPic,
    facts: [
      "Hazel has a lot of energy",
      "Hazel is highly intelligent",
      "Hazel loves people more than dogs",
    ],
  },
  {
    name: "tubby",
    id: 2,
    age: 4,
    image: tubbyPic,
    facts: [
      "Tubby is really stupid",
      "Tubby does not like walks",
      "Angelina hates Tubby",
    ],
  },
];

function App() {
  return (
    <div className="App">
      {/* nav */}
      <Nav/>
      
      {/* carousel */}
      <Carousel/>

      {/* inhalt */}
      <div className="d-flex justify-content-center flex-wrap">
        {dogs.map((x) => (
          <div key={x.id} className="card m-5" style={{ width: "18rem" }}>
            <img src={x.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-primary text-uppercase">
                {x.name}
              </h5>
              {x.facts.map((fact, i) => (
                <li key={i}>{fact}</li>
              ))}

              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
