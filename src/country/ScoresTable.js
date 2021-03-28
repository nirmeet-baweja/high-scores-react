import React from "react";
import OnePersonScore from "../commonComponents/OnePersonScore";

const ScoresTable = (props) => {
  return (
    <div className="scores">
      {props.scores.map((score) => (
        <OnePersonScore score={score} />
      ))}
    </div>
  );
};

export default ScoresTable;
