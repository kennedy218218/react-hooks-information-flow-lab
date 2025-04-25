import React from "react";

export default function Header({ onDarkModeClick }) {
  return (
    <header>
      <h1>My Shopping App</h1>
      <button onClick={onDarkModeClick}>Toggle Dark Mode</button>
    </header>
  );
}
