import React from "react";
import Button from "./Button";

const Typeracer = (props) => {
  const {
    newWord,
    inputValue,
    setInputValue,
    disabled,
    time,
    animation,
    handleInput,
  } = props;

  return (
    <div className="typeRacer">
      <div className="wordOutput">
        <p>{newWord}</p>
      </div>

      <div
        style={{ animation: animation !== null ? animation : "" }}
        className="time"
      >
        <p>{time}</p>
      </div>

      <div className="wordValues">
        <input
          type="text"
          disabled={disabled && disabled}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={disabled ? "" : "Start typing..."}
        />
        <Button />
      </div>
    </div>
  );
};

export default Typeracer;
