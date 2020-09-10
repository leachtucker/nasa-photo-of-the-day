// IMPORTS
import React from 'react';
import styled from 'styled-components';

function Media({url, title, mediaType}) {

    // Styled components
    const Image = styled.img`
        width: 45%;
        margin-bottom: 1%;
    `;

    const Video = styled.iframe`
        height: 400px;
        width: 60%;
    `;

    // IF _mediaType_ is an image, render an image. Otherwise, render a video.
    if (mediaType === "image") {
        return (
            <Image src={url} alt={title} />
        );
    }

    // This runs if the media type is not an image (our API only sends links to images or videos, so we need not to worry about any other case)
    return (
        // API sends video links to YouTube, so we will use an iFrame to display those
        <Video src={url} title={title} allowFullScreen={true}></Video>
    );

}

export default Media;