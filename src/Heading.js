import React from "react";

const Heading = (props) => {
  return (
    <header className="App-header">
      <h1 className="App-title">{props.pageTitle}</h1>
    </header>
  );
};

export default Heading;
