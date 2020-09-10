// IMPORTS
import React from 'react';
import Media from './Media.js';
import Date from './Date.js';
import DateDropDown from './DateDropDown.js';
import H2 from './H2.js';
import Explantion from './Explanation.js';

function Apod(props) {
    const {photoOfTheDay, fetchFromDate} = props;

    return (
        <div className="Apod">
            <DateDropDown fetchFromDate={fetchFromDate} />
            <Media url={photoOfTheDay.url} title={photoOfTheDay.title} mediaType={photoOfTheDay.media_type} />
            <H2>{photoOfTheDay.title}</H2>
            <Date date={photoOfTheDay.date} />
            <Explantion elevation={3} variant="outlined" square>{photoOfTheDay.explanation}</Explantion>
        </div>
    );
}

export default Apod;