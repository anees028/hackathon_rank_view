import React from "react";
import Category from "./Category";

const data = {
  household: {
    title: "Household",
    backgroundClass: "household-bg",
    items: [
      { id: 1, name: "Tether & Retviews", value: "-10,75 €", icon: "🔥", extraInfo: "0" },
      { id: 2, name: "Voltex Energy", value: "-10,11 €", icon: "🔥", extraInfo: "0" },
      { id: 3, name: "PRIDEx", value: "-8,06 €", icon: "🔥", extraInfo: "0" },
      { id: 4, name: "flexYourLoad", value: "-6,80 €", icon: "🔥", extraInfo: "0" },
      { id: 5, name: "Peak Performers", value: "-5,32 €", icon: "🔥", extraInfo: "0" },
      { id: 6, name: "Watt Wizards", value: "-3,59 €", icon: "🔥", extraInfo: "0" },
      { id: 7, name: "Rescoop1", value: "23,92 €", icon: "🔥", extraInfo: "410" },
      { id: 8, name: "50Hertz & Amaris", value: "25,62 €", icon: "🔥", extraInfo: "839" },
      { id: 9, name: "Fixed price", value: "25,62 €", icon: "🔥", extraInfo: "842", isFixed: true },
    ],
  },
  office: {
    title: "Office",
    backgroundClass: "office-bg",
    items: [
      { id: 1, name: "Elexide", value: "236,42 €", icon: "⚡", extraInfo: "0" },
      { id: 2, name: "Powernauters", value: "264,37 €", icon: "⚡", extraInfo: "0" },
      { id: 3, name: "In The Pocket", value: "299,56 €", icon: "⚡", extraInfo: "0" },
      { id: 4, name: "Fixed price", value: "570,21 €", icon: "⚡", extraInfo: "0", isFixed: true },
      { id: 5, name: "The Resistors", value: "570,24 €", icon: "⚡", extraInfo: "0" },
    ],
  },
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Category category={data.household} />
      <Category category={data.office} />
    </div>
  );
};

export default Dashboard;
