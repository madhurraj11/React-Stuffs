import React from "react";
import useCounter from "./useCounter";

const Counter = () => {
    const {count, increment, decrement, reset} = useCounter(0);

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

}

export default Counter;