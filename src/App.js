import React, { useState } from "react";
import AllCountryScores from "./data/AllCountryScores";
import ScoreBoard from "./ScoreBoard";
import sortByScoreDsc from "./sortByScoreDsc";
import sortByScoreAsc from "./sortByScoreAsc";
import sortByCountry from "./sortByCountry";

import Heading from "./Heading";

import "./App.css";

function App() {
  AllCountryScores.sort(sortByCountry);

  const [sortOrder, setSortOrder] = useState("asc");
  const [prevSortOrder, setPrevSortOrder] = useState("");
  const [countryScoreData, setCountryScoreData] = useState(AllCountryScores);

  const sortScores = () => {
    if (sortOrder === "asc") {
      AllCountryScores.forEach((oneCountryScores) => {
        oneCountryScores.scores.sort(sortByScoreDsc);
      });
      setSortOrder("dsc");
    } else {
      AllCountryScores.forEach((oneCountryScores) => {
        oneCountryScores.scores.sort(sortByScoreAsc);
      });
      setSortOrder("asc");
    }
    setPrevSortOrder(sortOrder);
    setCountryScoreData(AllCountryScores);
  };

  return (
    <div className="App">
      <Heading />
      <button className="sortButton" onClick={sortScores}>
        Sort By Score ({prevSortOrder.toUpperCase()})
      </button>
      {countryScoreData.map((oneCountryScores, index) => (
        <ScoreBoard key={index} oneCountryScores={oneCountryScores} />
      ))}
    </div>
  );
}

export default App;
