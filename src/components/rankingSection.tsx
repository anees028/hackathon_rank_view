import React from "react";
import RankingCard from "./rankingCard";
import frame from '../assets/frame.svg';
import temperature from '../assets/temperature.svg';
import { Category } from "../types";
import clsx from "clsx";

interface RankingSectionProps {
  title: string;
  category: Category;
  type: "temperature" | "health";
}

const RankingSection: React.FC<RankingSectionProps> = ({ title, category, type }) => {
  
  return (
    <div className={`${category.fontColor} ${type === 'temperature' ? "ranking-section-temperature" : "ranking-section-health"} `}>
      <h2 className={clsx("section-title",  type === "temperature" ? "text-red-500" : "text-petrol-600")}>
        <img src={ title === 'Asset Temperature' ? `./temperature_colored.svg` : `./frame_colored.svg` } alt="icon" className="section-icon" /> {title}
      </h2>
      <div className="teams-container">
        {category.items.map((item, index) => (
          <RankingCard
            key={index}
            title={title}
            rank={item.id}
            name={item.name}
            score={item.score}
            icon={ title === 'Asset Temperature' ? temperature : frame }
          />
        ))}
      </div>
    </div>
  );
};

export default RankingSection;

