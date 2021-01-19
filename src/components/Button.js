import React from "react";

const Button = ({ handleStart, disabled }) => (
  <button onClick={handleStart}>{disabled ? "Start" : "Restart"}</button>
);

export default Button;
