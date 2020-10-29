import { render } from '@testing-library/react';
import React, { Component } from 'react';
import triviaData from '../triviaData.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Question.css'

const triviaQ = triviaData.map((triviaQs) => {
    return(
        <>
        <Card className="outerCard">
        <div className="cards">
            <Card.Header><p>{triviaQs.question}</p></Card.Header>
            <ListGroup as="ul" variant="dark">
                <ListGroup.Item><Button>{triviaQs.incorrect[0]}</Button></ListGroup.Item>
                <ListGroup.Item><Button>{triviaQs.incorrect[1]}</Button></ListGroup.Item>
                <ListGroup.Item><Button>{triviaQs.incorrect[2]}</Button></ListGroup.Item>
                <ListGroup.Item><Button>{triviaQs.correct}</Button></ListGroup.Item>
            </ListGroup>
            </div>
        </Card>

        </>
    )
})

export default class Questions extends Component {
    render() {
        return (
            <>
            {triviaQ}
            </>
        )
    }
}