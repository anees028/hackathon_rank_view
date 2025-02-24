import React from "react";
import RankingCard from "./RankingCard";
import frame from '../assets/frame.svg';
import temperature from '../assets/temperature.svg';

const RankingSection = ({ title, category }) => {

  return (
    <div className={`${category.fontColor} ${title === 'Asset Temperature' ? "ranking-section-temperature" : "ranking-section-health"} `}>
      <h2 className="section-title">
        <img src={ title === 'Asset Temperature' ? `./temperature_colored.svg` : `./frame_colored.svg` } alt="icon" className="section-icon" /> {title+" ranking"}
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
