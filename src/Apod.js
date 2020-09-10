// IMPORTS
import React from 'react';
import Media from './Media.js';
import Date from './Date.js';

function Apod(props) {
    const {photoOfTheDay} = props;

    return (
        <div>
            <Media url={photoOfTheDay.url} title={photoOfTheDay.title} mediaType={photoOfTheDay.media_type} />
            <h2>{photoOfTheDay.title}</h2>
            <Date date={photoOfTheDay.date} />
        </div>
    );
}

export default Apod;