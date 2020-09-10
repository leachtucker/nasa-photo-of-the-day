import React from 'react';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function Date({ date }) {
    const monthDigit = parseInt(date.split("-")[1] - 1);

    return (
        <p>{months[monthDigit]}</p>
    );
}

export default Date;