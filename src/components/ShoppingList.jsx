import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item"; 
import data from "../data/items"; 

export default function ShoppingList() {
  const [category, setCategory] = useState("All");

  function handleCategoryChange(newCat) {
    setCategory(newCat);
  }

  const itemsToDisplay = category === "All"
    ? data
    : data.filter(item => item.category === category);

  return (
    <div>
      <Filter category={category} onCategoryChange={handleCategoryChange} />
      <ul>
        {itemsToDisplay.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
