import React from "react";
import RankingCard from "./RankingCard";
import frame from '../assets/frame.svg';
import temperature from '../assets/temperature.svg';

const RankingSection = ({ title, category }) => {

  return (
    <div className={`ranking-section ${category.fontColor}`}>
      {/* <h2 >{icon} {title}</h2> */}
      <h2 className="section-title">
        <img src={ title === 'Asset Temperature' ? `./temperature_colored.svg` : `./frame_colored.svg` } alt="icon" className="section-icon" /> {title}
      </h2>
      <div className="teams-container">
        {category.items.map((item, index) => (
          <RankingCard
            key={index}
            rank={index + 1}
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
