import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchData } from './Data/index.js';
import Apod from './Components/Apod.js';
import LoadingMessage from './Components/LoadingMessage';

// NOTE: Can display PHOTO or VIDEO from APOD with react
// REMINDER 2:  Using Sept. 9th as the date in query because API was throwing errors after 5pm

function App() {
  const [photoOfTheDay, setPTD] = useState();

  // Runs on first render of App() component
  useEffect(
    () => {
      // Fetching APOD data from API and pushing it into the state
      fetchData(setPTD);
    }, []);

    const fetchFromDate = (date) => {
      fetchData(setPTD, date);
    }

  // Displays a loading message if axios is still fetching data from API
  if (!photoOfTheDay) {
    return (
      <div className="App">
        <LoadingMessage>LOADING...</LoadingMessage>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Astronomy Picture of the Day</h1>
      <Apod photoOfTheDay={photoOfTheDay} fetchFromDate={fetchFromDate} />
    </div>
  );
}

export default App;
