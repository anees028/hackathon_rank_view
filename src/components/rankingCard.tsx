import React from "react";
import {RankingCardProps} from '../types'
import { NvAvatar } from "@nova-design-system/nova-react";

const RankingCard: React.FC<RankingCardProps> = ({ title, rank, name, score, icon }) => {

  return (
    <div className="card">
        <NvAvatar className="rank" initials={rank} color={title === 'Asset Temperature' ? '4': '8'}/>
      {/* <span className={`${title === 'Asset Temperature' ? "rank-temperature" : "rank-health"}`}>{rank}</span> */}
      <div className="team-info" style={{ flexGrow: 1 }}>
        <span className="team-name">{name}</span>
        <span className="score"><img src={icon} alt="icon" height="15px" className="score-icon" /> {score}</span>
      </div>
    </div>
  );
};

export default RankingCard;

