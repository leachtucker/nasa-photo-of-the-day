import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchData } from './Data/index.js';

function App() {
  const [photoOfTheDay, setPTD] = useState();

  // Runs on first render of App() component
  useEffect(
    () => {
      // Fetching APOD data from API and pushing it into the state
      fetchData(setPTD);
    },[]);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
