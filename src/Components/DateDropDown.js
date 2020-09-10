// STRETCH
// IMPORTS
import React from 'react';
import styled from 'styled-components';
import Button from './Button.js';

function DateDropDown(props) {
    const { fetchFromDate } = props;

    const Container = styled.div`
        margin: 1% 0;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 32%;
        justify-content: space-around;
    `;

    return (
        <Container>
            <input id="dateInput" type="date"></input>
            <Button onClick={() => fetchFromDate(document.querySelector('#dateInput').value)}>Go</Button>
        </Container>
    );
}

export default DateDropDown;