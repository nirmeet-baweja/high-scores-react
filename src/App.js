import React from "react";
import AllCountryScores from "./data/AllCountryScores";
import ScoreBoard from "./ScoreBoard";
import sortByCountry from "./sortByCountry";
import sortByScore from "./sortByScore";

import Heading from "./Heading";

import "./App.css";

function App() {
  AllCountryScores.sort(sortByCountry);
  AllCountryScores.forEach((oneCountryScores) => {
    console.log(oneCountryScores.scores);
    oneCountryScores.scores.sort(sortByScore);
  });

  return (
    <div className="App">
      <Heading />
      {AllCountryScores.map((oneCountryScores, index) => (
        <ScoreBoard key={index} oneCountryScores={oneCountryScores} />
      ))}
    </div>
  );
}

export default App;
