import React, { useState } from "react";

export default function Counter() {
  // useState - React hook
  // result - state variable; 0 / 1 / 2, etc. - initial value
  // setResult - function to update the state variable, action to update the state / trigger the re-render of the component / allow us to chanage the value of the state variable
  // useState() - initial state
  const [result, setResult] = useState(1);

  // logic
  function increment() {
    // update the state variable - 0 -> 1 -> 2 -> 3 -> 4 -> 5
    setResult(result + 1);
  }
  function decrement() {
    // update the state variable - 0 -> -1 -> -2 -> -3 -> -4 -> -5
    setResult(result - 1);
  }
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={increment}>+</button>
      <h3>value: {result}</h3>
      <button onClick={decrement}>-</button>
    </div>
  );
}
