import React, { useState, useEffect } from "react";
import "./App.css";
import Preview from "./components/Preview";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  function searchTermChanged(e) {
    setSearchTerm(e.target.value);
  }

  // 1. Beim Initialisieren der Component
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://swapi.dev/api/people/");
      const data = await res.json();
      setCharacters(data.results);
    }
    fetchData();
  }, []);

  // 2. Beim State-Update

  useEffect(() => {
    async function fetchSearchResult() {
      const res = await fetch(
        `https://swapi.dev/api/people/?search=${searchTerm}`
      );
      const data = await res.json();
      setCharacters(data.results);
    }
    fetchSearchResult();
  }, [searchTerm]);

  return (
    <div className="App">
      <div>
        <input
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={searchTermChanged}
        />
      </div>
      {searchTerm === "" && <Preview />}
      <ul>
        {characters.map((character, index) => (
          <li key={index}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
