// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import triviaData from '../triviaData.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Question.css'

const triviaQ = triviaData.map((triviaQs) => {
    return(
        <>
        <section className="outerCard">
            <p>{triviaQs.question}</p>
            <ul className="list-items">
                <li><Button variant="outline-dark">{triviaQs.incorrect[0]}</Button></li>
                <li><Button variant="outline-dark" className="button-style">{triviaQs.incorrect[1]}</Button></li>
                <li><Button variant="outline-dark" className="button-style">{triviaQs.incorrect[2]}</Button></li>
                <li><Button variant="outline-dark" className="button-style">{triviaQs.correct}</Button></li>
            </ul>
        </section>
        {/* <Card className="outerCard">
            <Card.Header>{triviaQs.question}</Card.Header>
            <ListGroup className="list-items" as="ul" variant= "flush">
                <ListGroup.Item><Button variant="outline-dark">{triviaQs.incorrect[0]}</Button></ListGroup.Item>
                <ListGroup.Item><Button variant="outline-dark">{triviaQs.incorrect[1]}</Button></ListGroup.Item>
                <ListGroup.Item><Button variant="outline-dark">{triviaQs.incorrect[2]}</Button></ListGroup.Item>
                <ListGroup.Item><Button variant="outline-dark">{triviaQs.correct}</Button></ListGroup.Item>
            </ListGroup>
        </Card> */}
        </>
    )
})

export default class Questions extends Component {
    render() {
        return (
            <div className="finalDiv">
            {triviaQ}
            </div>
        )
    }
}