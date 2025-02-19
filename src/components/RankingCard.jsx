import React from "react";

const RankingCard = ({ rank, name, score, icon }) => {
  return (
    <div className="ranking-card">
      <span className="rank">{rank}</span>
      <div className="team-info" style={{flexGrow: '1'}}>
        <span className="team-name">{name}</span>
        <span className="score"><img src={icon} alt="icon" height="15px" className="score-icon"></img> {score}</span>
      </div>
    </div>
  );
};

export default RankingCard;