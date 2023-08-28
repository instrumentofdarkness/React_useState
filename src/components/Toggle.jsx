import React, { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(false);

  function toggleon() {
    setToggle(toggle === "ON" ? "OFF" : "ON");
  }

  return (
    <div>
      <h1>Toggle</h1>
      <h3> the toggle is {toggle}</h3>
      <button onClick={toggleon}>toggle</button>
    </div>
  );
}
