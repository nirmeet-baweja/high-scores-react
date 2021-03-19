import React from "react";
import OnePersonScore from "./OnePersonScore";

const ScoreBoard = (props) => {
  return (
    <div className="countryScoreBoard">
      <h2 className="countryName">
        High Scores : {props.oneCountryScores.name}
      </h2>
      <div className="scores">
        {props.oneCountryScores.scores.map((score) => (
          <OnePersonScore score={score} />
        ))}
      </div>
    </div>
  );
};

export default ScoreBoard;
