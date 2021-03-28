import React from "react";
import { sortByScoreDsc } from "../javaScriptFunctions/sortByScore";
import OnePersonScore from "../commonComponents/OnePersonScore";

const WorldWideScores = (props) => {
  let allScores = [];

  props.allCountryScores.forEach((oneCountryScores) => {
    oneCountryScores.scores.forEach((onePlayerScore) => {
      allScores.push(onePlayerScore);
    });
  });

  allScores.sort(sortByScoreDsc);

  console.log(allScores);

  return (
    <div className="countryScoreBoard">
      {allScores.map((onePlayerScore) => (
        <OnePersonScore score={onePlayerScore} />
      ))}
    </div>
  );
};

export default WorldWideScores;
