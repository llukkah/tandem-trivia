import { render } from '@testing-library/react';
import React, { Component } from 'react';
import triviaData from '../triviaData.json'

const triviaQ = triviaData.map((triviaQs) => {
    return(
        <>
        <p>{triviaQs.question}</p>
        <button>{triviaQs.incorrect[0]}</button>
        <button>{triviaQs.incorrect[1]}</button>
        <button>{triviaQs.incorrect[2]}</button>
        <button>{triviaQs.correct}</button>
        </>
    )
})

export default class Questions extends Component {
    render() {
        return (
            <div>{triviaQ}</div>
        )
    }
}

// react bootstrap:
// <Card style={{ width: '18rem' }}>
// //   <Card.Header>Featured</Card.Header>
// //   <ListGroup variant="flush">
// //     <ListGroup.Item>Cras justo odio</ListGroup.Item>
// //     <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
// //     <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
// //   </ListGroup>
// // </Card>