import React from "react";
import RankingCard from "./rankingCard";
import frame from '../assets/frame.svg';
import temperature from '../assets/temperature.svg';
import { RankingSectionProps } from "../types";
import clsx from "clsx";


const RankingSection: React.FC<RankingSectionProps> = ({ title, teams, type }) => {

  return (
    <div className={`${type === "temperature" ? "ranking-section-temperature" : "ranking-section-health"}`}>
      <h2 className={clsx("section-title", type === "temperature" ? "text-red-500" : "text-petrol-600")}>
        <img
          src={type === "temperature" ? `./temperature_colored.svg` : `./frame_colored.svg`}
          alt="icon"
          className="section-icon"
        />
        {title}
      </h2>
      <div className="teams-container">
        {teams.map((team) => (
          <RankingCard
            key={team.id}
            title={title}
            rank={team.id + 1}
            name={team.teamName}
            score={type === "temperature" ? team.temperatureScore.toLocaleString() : team.healthScore.toLocaleString()}
            icon={type === "temperature" ? temperature : frame}
          />
        ))}
      </div>
    </div>
  );
};

export default RankingSection;

