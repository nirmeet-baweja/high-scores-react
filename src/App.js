import React, { useState } from "react";
import Heading from "./Heading";

import "./App.css";
import Table from "./Table";

function App() {
  const [tableType, setTableType] = useState("country");
  const [prevTableType, setPrevTableType] = useState("worlwide");

  function toggleTableType() {
    setPrevTableType(tableType);

    if (tableType === "country") {
      setTableType("worldwide");
    } else {
      setTableType("country");
    }
  }

  return (
    <div className="App">
      <Heading pageTitle={`High Scores - ${tableType}`} />
      <button className="typeToggleBtn" onClick={toggleTableType}>
        View {prevTableType} Scores
      </button>
      <Table tableType={tableType} />
    </div>
  );
}

export default App;
