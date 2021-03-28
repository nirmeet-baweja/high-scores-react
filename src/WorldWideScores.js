import React from "react";
import { sortByScoreDsc } from "./sortByScore";
import OnePersonScore from "./OnePersonScore";

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
