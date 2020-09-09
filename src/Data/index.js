// IMPORTS
import axios from 'axios';
import {BASE_URL, API_KEY} from '../Constants/index.js';

// Fetches the APOD from NASA API and calls the given stateSetter callback function with the data recieved
export const fetchData = (stateSetter) => {
axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(response => {
    stateSetter(response.data);
    })
    .catch(err => {
    console.log(`There has been an error fetching data from NASA API.', 'Error: ${err}`);
    });
}
