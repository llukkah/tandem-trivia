// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import triviaData from '../triviaData.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Question.css'
import {TriviaData} from './triviaData'

// const triviaQ = triviaData.map((triviaQs) => {
//     return(
//         <>
//         <section className="outerCard">
//             <p>{triviaQs.question}</p>
//             <ul className="list-items">
//                 <li><Button variant="outline-dark">{triviaQs.incorrect[0]}</Button></li>
//                 <li><Button variant="outline-dark" className="button-style">{triviaQs.incorrect[1]}</Button></li>
//                 <li><Button variant="outline-dark" className="button-style">{triviaQs.incorrect[2]}</Button></li>
//                 <li><Button variant="outline-dark" className="button-style">{triviaQs.correct}</Button></li>
//             </ul>
//         </section>
        {/* <Card className="outerCard">
            <Card.Header>{triviaQs.question}</Card.Header>
            <ListGroup className="list-items" as="ul" variant= "flush">
                <ListGroup.Item><Button variant="outline-dark">{triviaQs.incorrect[0]}</Button></ListGroup.Item>
                <ListGroup.Item><Button variant="outline-dark">{triviaQs.incorrect[1]}</Button></ListGroup.Item>
                <ListGroup.Item><Button variant="outline-dark">{triviaQs.incorrect[2]}</Button></ListGroup.Item>
                <ListGroup.Item><Button variant="outline-dark">{triviaQs.correct}</Button></ListGroup.Item>
            </ListGroup>
        </Card> */}
//         </>
//     )
// })

export default class Questions extends Component {
    state = {
        userAnswer: null,
        currentQuestion: 0,
        options: []
    }

    loadQuiz = () => {
        const{currentQuestion} = this.state;
        this.setState(() => {
            return {
                questions: triviaData[currentQuestion].question,
                options: triviaData[currentQuestion].incorrect,
                answers: triviaData[currentQuestion].correct
            }
        })
    }


    componentDidMount() {
        this.loadQuiz();
    }

    nextQuestionHandler = () => {
        this.setState({
            currentQuestion: this.state.currentQuestion +1
        })
        console.log(this.state.currentQuestion)
    }
//updates the component
componentDidUpdate(prevProps, prevState){
    const {currentQuestion} = this.state;
    if(this.state.currentQuestion !== prevState.currentQuestion) {
        this.setState(() => {
            return {
                questions: triviaData[currentQuestion].question,
                options: triviaData[currentQuestion].incorrect,
                answers: triviaData[currentQuestion].correct
            }
        })
    }
}
    render() {
        const {questions, options, currentQuestion, userAnswer} = this.state;
        return (
            <div className="finalDiv">
                <section className="outerCard">
                    <h3>{questions}</h3>
                    <h5>{`Question ${currentQuestion} out of ${triviaData.length}`}</h5>
                </section>
                {options.map(option => (
                <ul className="list-items">
                    <p
                    className= {`ui floating message
                    ${userAnswer === option ? "selected" : null}
                    
                    `}>
                    {option}
                </p>
                </ul>
                ))}
                <button
                onClick={this.nextQuestionHandler}>Next</button>
            </div>
        )
    }
}

//         <section className="outerCard">
//             <p>{triviaQs.question}</p>
//             <ul className="list-items">
//                 <li><Button variant="outline-dark">{triviaQs.incorrect[0]}</Button></li>
//                 <li><Button variant="outline-dark" className="button-style">{triviaQs.incorrect[1]}</Button></li>
//                 <li><Button variant="outline-dark" className="button-style">{triviaQs.incorrect[2]}</Button></li>
//                 <li><Button variant="outline-dark" className="button-style">{triviaQs.correct}</Button></li>
//             </ul>
//         </section>