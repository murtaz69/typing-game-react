import React, { useState, useEffect } from "react";
import Words from "./components/Words";
import Container from "./components/Container";
import Typeracer from "./components/Typeracer";
import Results from "./components/Results";

import "./index.css";

function App() {
  const [word, setWord] = useState(Words);

  // first word in words array is initial state value
  const [newWord, setNewWord] = useState(word[0]);

  const [disabled, setDisabled] = useState(true);

  // display correct result
  const [correctResults, setCorrectResults] = useState([]);
  const [wrongResults, setWrongResults] = useState([]);
  const [countCorrect, setCountCorrect] = useState(0);
  const [time, setTime] = useState(25);
  const [inputValue, setInputValue] = useState("");
  // state for our input
  const [animation, setAnimation] = useState(null);

  let randomWord = Math.floor(Math.random() * Words.length);

  const checkAnswer = () => {
    if (inputValue.trim() === newWord) {
      setCorrectResults((prevCorrect) => [...prevCorrect, newWord]);
      setCountCorrect((prevCorrect) => prevCorrect + 1);
      return;
    }
    setWrongResults((prevWrong) => [...prevWrong, inputValue]);
  };

  const handleInput = (e) => {
    // meaning if we hit enter and our input value is not completely empty
    if (e.charCode === 13 && inputValue.trim() !== "") {
      checkAnswer();
      setNewWord(word[randomWord]);
      setInputValue("");
    }
  };

  const handleStart = () => {
    // set disabled to false cause its true atm
    setDisabled(!disabled);

    // clear correct and wrong answers when starting a new game
    setCorrectResults([]);
    setWrongResults([]);

    // also reset the count of correct answers
    setCountCorrect(0);

    // clear input field
    setInputValue("");
  };

  useEffect(() => {
    if (time <= 25 && time !== 0 && disabled === false) {
      setTimeout(() => setTime((prevTime) => prevTime - 1), 1000);
    } else if (disabled) {
      setTime(25);
      setAnimation(null);
    } else if (time === 0) {
      setDisabled(true);
    }

    if (time <= 10) {
      setAnimation("scaleNumber 2s infinite");
    }
  }, [disabled, time]);

  // useEffect that will run when the page loads
  useEffect(() => {
    setNewWord(word[randomWord]);
  }, []);

  return (
    <div className="typing-game">
      <Container>
        <Typeracer
          newWord={newWord}
          inputValue={inputValue}
          setInputValue={setInputValue}
          disabled={disabled}
          time={time}
          handleInput={handleInput}
          handleStart={handleStart}
          animation={animation}
        />
      </Container>
      <Results
        correctResults={correctResults}
        wrongResults={wrongResults}
        countCorrect={countCorrect}
      />
    </div>
  );
}

export default App;
