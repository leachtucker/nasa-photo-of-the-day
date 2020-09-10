import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchData } from './Data/index.js';
import Apod from './Apod.js';

// NOTE: Can display PHOTO or VIDEO from APOD with react
// REMINDER: Use 'date=2020-07-26' for styling iFrame
// REMINDER 2:  Using Sept. 9th as the date in query because API was throwing errors after 5pm

function App() {
  const [photoOfTheDay, setPTD] = useState();

  // Runs on first render of App() component
  useEffect(
    () => {
      // Fetching APOD data from API and pushing it into the state
      fetchData(setPTD);

    }, []);

  // Displays a loading message if axios is still fetching data from API
  if (!photoOfTheDay) {
    return (
      <div className="App">
        <h3 className="loading-msg">LOADING...</h3>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Astronomy Picture of the Day</h1>
      <Apod photoOfTheDay={photoOfTheDay} />
    </div>
  );
}

export default App;
