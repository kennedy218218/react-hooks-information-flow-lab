import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkModeClick() {
    setDarkMode(d => !d);
  }

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList />
    </div>
  );
}

export default App;
