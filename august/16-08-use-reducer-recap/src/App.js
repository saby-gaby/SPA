import "./App.css";
import React, { useReducer } from "react";

function App() {
  function countReducer(currentState, action) {
    switch (action.type) {
      case "decrease":
        return currentState === 0 ? 0 : currentState - 1;
      case "increase":
        return currentState + 1;
      case "reset":
        return 0;
      default:
        return currentState;
    }
  }

  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <div className="App">
      <h1>Besucher im Kaufhaus</h1>
      <div id="count">{count}</div>
      <div>
        <button onClick={(e) => dispatch({ type: "decrease" })}>-</button>
        <button onClick={(e) => dispatch({ type: "increase" })}>+</button>
      </div>
      <div>
        <button onClick={(e) => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default App;
