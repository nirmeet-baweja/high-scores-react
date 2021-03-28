import React from "react";
import SortButtonScoreTable from "./country/SortButtonScoreTable";
import WorldWideScores from "./worldwide/WorldWideScores";
import AllCountryScores from "./data/AllCountryScores";

const Table = (props) => {
  if (props.tableType === "country") {
    return <SortButtonScoreTable />;
  } else {
    return <WorldWideScores allCountryScores={AllCountryScores} />;
  }
};

export default Table;
