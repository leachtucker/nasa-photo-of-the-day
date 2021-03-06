// IMPORTS
import Axios from 'axios';
import {BASE_URL, API_KEY} from '../Constants/index.js';

// Fetches the APOD from NASA API and calls the given stateSetter callback function with the data recieved
export const fetchData = (stateSetter, date) => {

    if (!date) {
        Axios.get(`${BASE_URL}?api_key=${API_KEY}&date=2020-09-09`)
        .then(response => {
            stateSetter(response.data);
        })
        .catch(err => {
            console.log(`There has been an error fetching data from NASA API.', 'Error: ${err}`);
        })
    } else {
        Axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${date}`)
        .then(response => {
            stateSetter(response.data);
        })
        .catch(err => {
            console.log(`There has been an error fetching data from NASA API.', 'Error: ${err}`);
        })
    }

}
