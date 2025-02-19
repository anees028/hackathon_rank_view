import React from "react";
import RankingSection from "./components/RankingSection";
import "./styles/styles.css";
import Header from "./components/header";

const data = {
  temperture: {
    title:"temperature",
    fontColor: 'temperature_color',
    items: [
      { name: "Team Alpha", score: "95,000" },
      { name: "Team Beta", score: "90,500" },
      { name: "Team Gamma", score: "88,200" },
      { name: "Team Delta", score: "85,700" },
      { name: "Team Epsilon", score: "83,400" },
      { name: "Team Zeta", score: "80,900" },
      { name: "Team Eta", score: "78,300" },
      { name: "Team Theta", score: "75,800" },
      { name: "Team Iota", score: "73,200" },
      { name: "Team Kappa", score: "70,600" },
      { name: "Team Lambda", score: "68,100" },
      { name: "Team Mu", score: "65,500" },
    ],
  },
  health: {
    title: "health",
    fontColor: 'health_color',
    items: [
      { name: "Team Alpha", score: "95,000" },
      { name: "Team Beta", score: "90,500" },
      { name: "Team Gamma", score: "88,200" },
      { name: "Team Delta", score: "85,700" },
      { name: "Team Epsilon", score: "83,400" },
      { name: "Team Zeta", score: "80,900" },
      { name: "Team Eta", score: "78,300" },
      { name: "Team Theta", score: "75,800" },
      { name: "Team Iota", score: "73,200" },
      { name: "Team Kappa", score: "70,600" },
      { name: "Team Lambda", score: "68,100" },
      { name: "Team Mu", score: "65,500" },
    ]
  }
}

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="ranking-sections">
        <RankingSection title="Asset Temperature" category={data.temperture} />
        <RankingSection title="Asset Health" category={data.health} />
      </div>
    </div>
  );
};

export default App;