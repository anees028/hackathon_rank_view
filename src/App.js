import React, { useState, useEffect } from "react";
import RankingSection from "./components/RankingSection";
import "./styles/styles.css";
import Header from "./components/header";


const App = () => {
  const [data, setData] = useState({
    temperture: { items: [] },
    health: { items: [] },
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://98f5f6a1-a1c9-47e9-b8c1-8454f55d30f3.mock.pstmn.io/hackathon_ranking_data`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const text = await response.text(); // Read as plain text first
        console.log("Raw Response:", text); // Log to debug
        // const result = text
        const result = JSON.parse(text); // Parse manually
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 2 * 60 *60 * 1000); // Fetch data <-enter minutes number-> * 1000 (here 1000 is one mili second.)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  function sortByScoreDescending(items) {
    return items.sort((a, b) => {
      return (
        parseInt(b.score.replace(/,/g, ""), 10) -
        parseInt(a.score.replace(/,/g, ""), 10)
      );
    });
  }

  let temp_list = sortByScoreDescending([...data.temperture.items]);
  let health_list = sortByScoreDescending([...data.health.items]);

  temp_list.forEach((item, index) => {
    item.id = index + 1;
  });
  health_list.forEach((item, index) => {
    item.id = index + 1;
  });

  function rearrangeItems(items) {
    const half = items.length / 2;
    const result = [];

    for (let i = 0; i < half; i++) {
      result.push(items[i]); // Take from the first half
      result.push(items[i + half]); // Take from the second half
    }
    return result;
  }

  data.temperture.items = rearrangeItems(temp_list);
  data.health.items = rearrangeItems(health_list);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
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
