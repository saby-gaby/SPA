import "./App.css";
import React, { useEffect, useReducer } from "react";
import Coin from "./components/Coin/Coin.js";
import Counter from "./components/Counter/Counter";

const initState = {
  price: 0,
  count: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case "updatePrice":
      state={
        ...state,
        price: action.data
      }
      break
    case "increase":
      state = {
        ...state, 
        count: state.count++
      }
      break
    case "decrease":
      state = {
        ...state,
        count: state.count--,
      };
      break
    case "reset":
      state = {
        ...state,
        count: 0,
      };
      break
    default:
      console.log("Unbekannte Action");
  }
  return state
};

function App() {

  const coinName="BTC"

  const [state, dispatch] = useReducer(reducer ,initState);

  const getCoinData = async (coin) => {
    const apiKey = "f4815f908ba8959fff8c78553ed8f723a8f249324f13887151997558ec212cdf ";
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=EUR&api_key= `;

    const res = await fetch(url + apiKey);
    const data = await res.json();

    dispatch({type: "updatePrice", data: data.EUR});

    // console.log(data);
  };

  useEffect(() => {
    getCoinData(coinName);
  }, []);

  return (
    <div className="App">
      <Coin name={coinName} price={state.price} />
      <Counter count={state.count} dispatch={dispatch} />
    </div>
  );
}

export default App;
