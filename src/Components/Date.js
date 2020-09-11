import React from 'react';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function Date({ date }) {
    const dateArr = date.split('-');
    const monthDigit = parseInt(dateArr[1] - 1);
    const month = months[monthDigit];
    const year = dateArr[0];
    const day = dateArr[2];


    return (
        <p className="date">{`${day} ${month} ${year}`}</p>
    );
}

export default Date;