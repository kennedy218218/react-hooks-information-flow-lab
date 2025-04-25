import React from "react";

export default function Filter({ category = "All", onCategoryChange }) {
  return (
    <select
      name="filter"
      value={category}
      onChange={e => onCategoryChange(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Dessert">Dessert</option>
    </select>
  );
}
