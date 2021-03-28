import React, { useState } from "react";

// Import data and functions
import AllCountryScores from "./data/AllCountryScores";
import { sortByScoreAsc, sortByScoreDsc } from "./sortByScore";

// import Components
import ScoreBoard from "./ScoreBoard";
import sortByCountry from "./sortByCountry";

const SortButtonScoreTable = () => {
  const sortedCountryScores = AllCountryScores.slice().sort(sortByCountry);

  const [sortOrder, setSortOrder] = useState("asc");
  const [prevSortOrder, setPrevSortOrder] = useState("");
  const [countryScoreData, setCountryScoreData] = useState(sortedCountryScores);

  const sortScores = () => {
    if (sortOrder === "asc") {
      sortedCountryScores.forEach((oneCountryScores) => {
        oneCountryScores.scores.sort(sortByScoreDsc);
      });
      setSortOrder("dsc");
    } else {
      sortedCountryScores.forEach((oneCountryScores) => {
        oneCountryScores.scores.sort(sortByScoreAsc);
      });
      setSortOrder("asc");
    }
    setPrevSortOrder(sortOrder);
    setCountryScoreData(sortedCountryScores);
  };

  return (
    <>
      <button className="sortButton" onClick={sortScores}>
        Sort By Score ({prevSortOrder.toUpperCase()})
      </button>
      {countryScoreData.map((oneCountryScores, index) => (
        <ScoreBoard key={index} oneCountryScores={oneCountryScores} />
      ))}
    </>
  );
};

export default SortButtonScoreTable;
