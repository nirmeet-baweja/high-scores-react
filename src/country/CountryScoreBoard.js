import React from "react";
import ScoresTable from "./ScoresTable";

const CountryScoreBoard = (props) => {
  return (
    <div className="countryScoreBoard">
      <h2 className="countryName">
        High Scores : {props.oneCountryScores.name}
      </h2>
      <ScoresTable scores={props.oneCountryScores.scores} />
    </div>
  );
};

export default CountryScoreBoard;
