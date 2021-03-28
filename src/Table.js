import React from "react";
import SortButtonScoreTable from "./SortButtonScoreTable";
import WorldWideScores from "./WorldWideScores";
import AllCountryScores from "./data/AllCountryScores";

const Table = (props) => {
  if (props.tableType === "country") {
    return <SortButtonScoreTable />;
  } else {
    return <WorldWideScores allCountryScores={AllCountryScores} />;
  }
};

export default Table;
