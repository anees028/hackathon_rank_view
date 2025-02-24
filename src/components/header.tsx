import React from "react";

export const Header : React.FC<any> = () => {
  return (
    <div className="header">
        <img src="./hackhaton_logo.svg" alt="Hackathon Logo" className="logo" />
        <p>Hackathon Rankings</p>
        <img src="./elia_logo.svg" alt="Elia Logo" className="logo" />
    </div>
  );
};

