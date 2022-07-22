import React, { useState, useEffect } from "react";
// import fetch from "node-fetch";
import "./App.css";

function App(props) {
  const [state, setState] = useState(0);
  const [nasaPic, setNasaPic] = useState({});

  console.log("Vor dem return");

  const clickHandler = () => {
    setState(state + 1);
    console.log(state);
  };

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=njf5ee9Y4vu828PCg1yxJjZbaDWgAuHDvUbk5VtX"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("got data");
        setNasaPic({
          url: data.url,
          text: data.explanation,
          title: data.title,
        });
      });
  }, []); // leer [] -> wird nur einmal gerendert
          // [props]-> wird gerendert wenn die props aktualisiert werden
          // [state] andere state -> wird immer gerendert, wenn die andere event ausgeführt wird
          // ohne [] -> wird bei jedem event neu-gerendert

  return (
    <div className="App">
      <h1>Hallo Welt</h1>
      <button onClick={clickHandler}>Klick mich</button>
      <img
        src={nasaPic.url}
        alt=""
        style={{
          display: "block",
          width: "500px",
          margin: "auto",
          marginTop: "0.5rem",
          border: "5px double gray",
        }}
      />
      <h3>{nasaPic.title}</h3>
      <p style={{
        width: "90%", margin:"auto"}}>{nasaPic.text}</p>
    </div>
  );
}

export default App;
