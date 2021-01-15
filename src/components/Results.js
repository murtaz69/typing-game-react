import React from "react";

const Results = ({ correctResults, wrongResults, countCorrect }) => {
  return (
    <div className="results">
      <div className="title">
        <p>Correct answers: {countCorrect}</p>
      </div>

      <div className="resultsContainer">
        <div className="correctResults">
          <p>
            {correctResults.map((correctWord, index) => (
              <div className="row" key={index}>
                <p>{correctWord}</p>
              </div>
            ))}
          </p>
        </div>

        <div className="wrongResults">
          <p>
            {wrongResults.map((wrongWord, index) => (
              <div className="row" key={index}>
                <p>{wrongWord}</p>
              </div>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
