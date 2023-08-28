import React, { useState } from "react";

export default function Counter() {
  // useState - React hook
  // result - state variable; 0 / 1 / 2, etc. - initial value
  // setResult - function to update the state variable, action to update the state / trigger the re-render of the component / allow us to chanage the value of the state variable
  // useState() - initial state
  const [result, setResult] = useState(10);

  let value = 1;
  // logic
  function increment() {
    value += 1;
    // update the state variable - 0 -> 1 -> 2 -> 3 -> 4 -> 5
    setResult(result + 1);

  }
  function decrement() {
    value -= 1;
  }
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={increment}>+</button>
      <p>Value here: {value}</p>
      <p>Value from state: {result}</p>
      <button onClick={decrement}>-</button>
      <p>Value here: {value}</p>
      <p>Value from state: {result}</p>
    </div>
  );
}
