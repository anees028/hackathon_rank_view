import React, { useEffect, useState } from "react";
import "./styles/styles.css";
import { Header } from "./components/header";
import RankingSection from "./components/rankingSection";
import { TeamData } from "./types"; 
import { Footer } from "./components/footer";

const serverUrl = import.meta.env.VITE_SERVER_URL


const App: React.FC = () => {

  const [teams, setTeams] = useState<TeamData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${serverUrl}hackathon_rank_data`);
      const text = await response.text();
      console.log("Raw API Response:", text);
      const result: TeamData[] = JSON.parse(text);
      setTeams(result);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 3*60000); // Refresh every 1 minute
    return () => clearInterval(interval);
  }, []);

  function sortByScoreDescending(items: TeamData[], key: "temperatureScore" | "healthScore"): TeamData[] {
    return [...items].sort((a, b) => b[key] - a[key]);
  }

  function rearrangeItems(items: TeamData[]): TeamData[] {
    const half = Math.floor(items.length / 2);
    const result: TeamData[] = [];

    for (let i = 0; i < half; i++) {
      if (items[i]) result.push(items[i]);
      if (items[i + half]) result.push(items[i + half]);
    }
    return result;
  }

  const sortedTemperatureTeams: TeamData[] = rearrangeItems(sortByScoreDescending(teams, "temperatureScore"));
  const sortedHealthTeams: TeamData[] = rearrangeItems(sortByScoreDescending(teams, "healthScore"));

  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (teams.length === 0) return <p>No data available</p>;

  return (
    <div className="container ml-auto mr-auto">
      <Header />
      <div className="ranking-sections">
        <RankingSection title="Asset Temperature" teams={sortedTemperatureTeams} type="temperature" />
        <RankingSection title="Asset Health" teams={sortedHealthTeams} type="health" />
      </div>
      <img className="fixed left-0 top-[15%] -translate-x-[10px]" src="bg_img.svg" alt="Background" />
      <img className="fixed left-0 top-[53%] -translate-x-[10px]" src="bg_img.svg" alt="Background" />
      <img className="fixed right-0 bottom-[40%] -translate-x-[-7px]" src="bg_img2.svg" alt="Background" />
      <img className="fixed right-0 bottom-[5%] -translate-x-[-7px]" src="bg_img2.svg" alt="Background" />
      <Footer />
    </div>
  );
};

export default App;