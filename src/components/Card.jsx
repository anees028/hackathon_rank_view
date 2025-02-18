import React from "react";

const Card = ({ item }) => {
  return (
    <div className={`item-card ${item.isFixed ? "fixed-card" : ""}`}>
      <div className="card-number">
        {item.id}
      </div>
      <div className="card-header" style={{flexGrow: '1'}}>
        <span className="card-title">{item.name}</span>
        <span className="card-info">{item.icon} {item.extraInfo}</span>
      </div>
      <span className="card-value">{item.value}</span>
    </div>
  );
};

export default Card;
