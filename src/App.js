import React from "react";
import RankingSection from "./components/RankingSection";
import "./styles/styles.css";
import Header from "./components/header";

let data = {
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
      // { name: "Iota", score: "96,000" },
      // { name: "Kappa", score: "8,600" },
      // { name: "Lambda", score: "79,100" },
      // { name: "Mu", score: "69,500" },
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
      { name: "Team Epsilon", score: "65,500" },
      { name: "Team Zeta", score: "80,900" },
      { name: "Team Eta", score: "78,300" },
      { name: "Team Theta", score: "75,800" },
      { name: "Team Iota", score: "73,200" },
      { name: "Team Kappa", score: "70,600" },
      { name: "Team Lambda", score: "68,100" },
      { name: "Team Mu", score: "83,400" },
    ]
  }
}

function sortByScoreDescending(items) {
  return items.sort((a, b) => {
    return parseInt(b.score.replace(/,/g, ""), 10) - parseInt(a.score.replace(/,/g, ""), 10);
  });
}

let temp_list = sortByScoreDescending(data.temperture.items)
let health_list = sortByScoreDescending(data.health.items)

temp_list.forEach((item, index) => {
  item.id = index+1;
})
health_list.forEach((item, index) => {
  item.id = index+1;
})

function rearrangeItems(items) {
  const half = items.length / 2; 
  const result = [];

  for (let i = 0; i < half; i++) {
    result.push(items[i]);        // Take from the first half
    result.push(items[i + half]); // Take from the second half
  }
  return result;
}

data.temperture.items = rearrangeItems(temp_list)
data.health.items = rearrangeItems(health_list)

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