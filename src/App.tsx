import React from "react";
import "./styles/styles.css";
import { Header } from "./components/header";
import RankingSection from "./components/rankingSection";
import { Category, Item } from "./types"; 
import { Footer } from "./components/footer";


const data: {temperature: Category; health: Category} = {
  temperature: {
    title: "temperature",
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

function sortByScoreDescending(items: Item[]): Item[] {
  return items.sort((a, b) => {
    return parseInt(b.score.replace(/,/g, ""), 10) - parseInt(a.score.replace(/,/g, ""), 10);
  });
}

let temp_list = sortByScoreDescending(data.temperature.items);
let health_list = sortByScoreDescending(data.health.items);

temp_list.forEach((item, index) => {
  item.id = index + 1;
});
health_list.forEach((item, index) => {
  item.id = index + 1;
});

function rearrangeItems(items: Item[]): Item[] {
  const half = items.length / 2; 
  const result: Item[] = [];

  for (let i = 0; i < half; i++) {
    result.push(items[i]);        // Take from the first half
    result.push(items[i + half]); // Take from the second half
  }
  return result;
}

data.temperature.items = rearrangeItems(temp_list);
data.health.items = rearrangeItems(health_list);

const App: React.FC = () => {
  return (
    <div className="container ml-auto mr-auto">
      <Header/>
      <div className="ranking-sections">
        <RankingSection title="Asset Temperature" category={data.temperature} type="temperature"/>
        <RankingSection title="Asset Health" category={data.health} type="health" />
      </div>
      <img className="fixed left-0 top-[15%] -translate-x-[10px]" src='bg_img.svg'></img>
      <img className="fixed left-0 top-[53%] -translate-x-[10px]" src='bg_img.svg'></img>
      <img className="fixed right-0 bottom-[40%] -translate-x-[-7px]" src='bg_img2.svg'></img>
      <img className="fixed right-0 bottom-[5%] -translate-x-[-7px]" src='bg_img2.svg'></img>
      <Footer/>
    </div>
  );
};

export default App;

