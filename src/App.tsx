import React, { useCallback, useEffect, useState } from "react";
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

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(serverUrl);
      const text = await response.text();

      const result: TeamData[] = JSON.parse(text);
      const transformedData = transformTeamData(result);
      setTeams(transformedData);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  },[]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 3 * 60000); // Refresh every 3 * 60(seconds) minute
    return () => clearInterval(interval);
  }, [fetchData]);

  const transformTeamData = (data: TeamData[]): TeamData[] => {
    return data.map((team, index) => ({
      ...team,
      id: index, // Replace the existing string ID with the index order
    }));
  };

  function sortByScoreDescending(items: TeamData[], key: "temperatureScore" | "healthScore"): TeamData[] {
    return [...items].sort((a, b) => b[key] - a[key]);
  }

  function rearrangeItems(items: TeamData[]): TeamData[] {
    const half = Math.floor(items.length / 2);
    const result: TeamData[] = [];

    for (let i = 0; i < half; i++) {
      result.push(items[i])
      result.push(items[i + half]);
    }
    return result;
  }

  const assignNewIds = (data: TeamData[]): TeamData[] => {
    const result: TeamData[] = new Array(data.length);
    let idCounter = 0;

    // Assign IDs to even indexes first
    for (let i = 0; i < data.length; i += 2) {
      result[i] = { ...data[i], id: idCounter++ };
    }

    // Assign IDs to odd indexes next
    for (let i = 1; i < data.length; i += 2) {
      result[i] = { ...data[i], id: idCounter++ };
    }

    return result;
  };


  const sortedTemperatureTeams: TeamData[] = rearrangeItems(sortByScoreDescending(teams, "temperatureScore"));
  const sortedHealthTeams: TeamData[] = rearrangeItems(sortByScoreDescending(teams, "healthScore"));

  const temperature_list: TeamData[] = assignNewIds(sortedTemperatureTeams);
  const health_list: TeamData[] = assignNewIds(sortedHealthTeams);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (teams.length === 0) return <p>No data available</p>;

  return (
    <div className="container ml-auto mr-auto">
      <Header />
      <div className="ranking-sections">
        <RankingSection title="Asset Temperature" teams={temperature_list} type="temperature" />
        <RankingSection title="Asset Health" teams={health_list} type="health" />
      </div>
      <img className="fixed left-0 top-[15%] -translate-x-[10px]" src="bg_img.svg" alt="Background" />
      <img className="fixed left-0 top-[53%] -translate-x-[10px]" src="bg_img.svg" alt="Background" />
      <img className="fixed right-0 bottom-[40%] -translate-x-[-7px]" src="bg_img2.svg" alt="Background" />
      <img className="fixed right-0 bottom-[2%] -translate-x-[-7px]" src="bg_img2.svg" alt="Background" />
      <Footer />
    </div>
  );
};

export default App;