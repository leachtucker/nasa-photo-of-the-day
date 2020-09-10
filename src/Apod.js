// IMPORTS
import React from 'react';
import Media from './Media.js';
import Date from './Date.js';

function Apod(props) {
    const {photoOfTheDay} = props;

    return (
        <div className="apod">
            <Media url={photoOfTheDay.url} title={photoOfTheDay.title} mediaType={photoOfTheDay.media_type} />
            <h2 className="title">{photoOfTheDay.title}</h2>
            <Date date={photoOfTheDay.date} />
            <p className="explanation">{photoOfTheDay.explanation}</p>
        </div>
    );
}

export default Apod;