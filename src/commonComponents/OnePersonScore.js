import React from "react";

const OnePersonScore = (props) => {
  return (
    <div className="onePersonScore">
      <div className="nameScoreContainer">
        <div className="name">{props.score.n.toUpperCase()}</div>
        <div className="score">{props.score.s}</div>
      </div>
      <hr />
    </div>
  );
};

export default OnePersonScore;
