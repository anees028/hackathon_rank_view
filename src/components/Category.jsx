import React from "react";
import Card from "./Card";

const Category = ({ category }) => {
  return (
    <div className={`category-card ${category.backgroundClass}`}>
      <h2 className="category-title">{category.title}</h2>
      <div className="items-container">
        {category.items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
