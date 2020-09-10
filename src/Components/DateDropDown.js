// STRETCH
// IMPORTS
import React from 'react';
import styled from 'styled-components';
// import Button from './Button.js';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

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
            <Input id="dateInput" type="date" defaultValue="2020-09-09"></Input>
            <Button variant="contained" color="primary" onClick={() => fetchFromDate(document.querySelector('#dateInput').value)}>{<ImageSearchIcon></ImageSearchIcon>}</Button>
        </Container>
    );
}

export default DateDropDown;