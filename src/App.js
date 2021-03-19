import React from "react";
import AllCountryScores from "./data/AllCountryScores";
import ScoreBoard from "./ScoreBoard";

import Heading from "./Heading";

import "./App.css";

function App() {
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
