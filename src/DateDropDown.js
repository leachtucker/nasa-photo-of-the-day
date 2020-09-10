// STRETCH

// IMPORTS
import React from 'react';

function DateDropDown(props) {
    const { fetchFromDate } = props;

    return (
        <div className='date-dropdown'>
            <input id="dateInput" type="date"></input>
            <button onClick={() => fetchFromDate(document.querySelector('#dateInput').value)}>Find</button>
        </div>
    );
}

export default DateDropDown;