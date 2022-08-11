import React, { useReducer } from 'react';

export default function Counter(props) {
    return (
        <div>
            <h3>Counte</h3>
            Count: {props.count}
            <button onClick={()=>props.dispatch({type:"increase"})}>+</button>
            <button onClick={()=>props.dispatch({type:"decrease"})}>-</button>
            <button onClick={()=>props.dispatch({type:"reset"})}>Reset</button>
        </div>
    )
}