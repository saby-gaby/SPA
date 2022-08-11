import "./Coin.css"
import React from 'react'

export default function Coin(props) {
    
    return (
      <div>
        <h2>Coin Name: {props.name}</h2>
        <h2>Price {props.price} EUR</h2>
      </div>
    );
}