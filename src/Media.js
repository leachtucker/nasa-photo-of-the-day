// IMPORTS
import React from 'react';

function Media({url, title, mediaType}) {
    // IF _mediaType_ is an image, render an image. Otherwise, render a video.
    if (mediaType === "image") {
        return (
            <img className="main-photo" src={url} alt={title} />
        );
    }

    // This runs if the media type is not an image (our API only sends links to images or videos, so we need not to worry about any other case)
    return (
        // API sends video links to YouTube, so we will use an iFrame to display those
        <iframe className="video" src={url} title={title} allowFullScreen={true}></iframe>
    );

}

export default Media;