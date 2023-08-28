import React, { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(false);

  function toggleon() {
    setToggle(!toggle);
  }

  return (
    <div>
      <h1>Toggle</h1>
      <p> the toggle is on</p>
      <button onClick={toggleon}>Toggle</button>
    </div>
  );
}
