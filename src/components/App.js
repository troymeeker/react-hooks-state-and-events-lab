import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
 
  const [items, setItems] = useState(itemData);
 const [darkMode, setDarkMode] = useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
 
function handleDarkMode(){
  setDarkMode((darkMode) =>!darkMode)
}
const appClass = darkMode ? "App dark" : "App light";



  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}> {darkMode ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
