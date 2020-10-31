// import { render } from '@testing-library/react';
import React, { Component } from 'react';
// // import triviaData from '../triviaData.json'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import './Question.css'
import {triviaData} from './triviaData'

export default class Questions extends Component {
    state = {
        userAnswer: null,
        currentQuestion: 1,
        options: [],
        quizEnd: false,
        score: 0,
        disabled: true
    }

    loadQuiz = () => {
        const {currentQuestion} = this.state;
        this.setState(() => {
            return {
                questions: triviaData[currentQuestion].question,
                options: triviaData[currentQuestion].incorrect,
                answers: triviaData[currentQuestion].correct
            }
        })
    }

    componentDidMount() {
        this.loadQuiz()
    }

    nextQuestionHandler = () => {
        const{userAnswer, answers, score} = this.state;
        this.setState({
            currentQuestion: this.state.currentQuestion +1
        })
        //incrememnt score if answer is correct
        if (userAnswer === answers) {
            this.setState({
                score: score + 1
            })
        }
        this.correctAnswer()
    }

    correctAnswer = answer => {
        if(this.state.userAnswer !== this.state.answers) {
            alert(`The Correct Answer is ${this.state.answers}`)  
         } else if(this.state.UserAnswer === answer) {
             alert('Correct!')
            }
    }

    //updates the component
    componentDidUpdate(prevProps, prevState){
        const {currentQuestion} = this.state;
        if(this.state.currentQuestion !== prevState.currentQuestion) {
            this.setState(() => {
                return {
                    disabled: true,
                    questions: triviaData[currentQuestion].question,
                    options: triviaData[currentQuestion].incorrect,
                    answers: triviaData[currentQuestion].correct
                }
            })
        }
    }

    //check answer
    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disabled: false
        })
    }

    finishHandler = () => {
            if(this.state.currentQuestion === 10) {
            this.setState({
                quizEnd: true,
                score: this.state.score + 1
            })
        }
        if (this.state.userAnswer === this.state.answer) {
            this.setState({
              score: this.state.score + 1
            });
          }
        }


    render() {
        const {questions, options, currentQuestion, correctAnswer, userAnswer, quizEnd} = this.state;
        if (quizEnd) {
            return (
                <div>
                    <h2 className="game-over-header">Game Over.</h2>
                    <h2 className="game-over-header">Your score is <span className="score-points">{this.state.score}</span> points</h2>
                    <h2 className="game-over-header">The correct answers are:</h2>
                    <div className="qAndA">
                        {triviaData.slice(1, 11).map((item, index) => (
                            <p className="qAndADiv">
                            <span
                                key={index}>
                                Q: {item.question}
                            </span>
                            <p
                                key={index}
                                className="answer">
                                A: {item.correct}
                            </p>
                            </p>
                            
                        ))}
                    </div> 
                </div>
            )
        }

        return (
            <>
            <div className="finalDiv">
                <section className="outerCard">
                    <p className="score">Score: {this.state.score}</p>
                    <p className="score">{`Question ${currentQuestion} out of 10`}</p>
                    <h3 className="question">{questions}</h3>
                <section className="buttons">
                    {options.map(option => (
                            <button
                                className="button-options"
                                onClick={() => this.checkAnswer(option)}
                            >
                                {option}
                            </button>
                    ))}
                    {currentQuestion < 10 && 
                        <button
                                className="submit-button"
                                disabled={this.setState.disabled}
                                onClick={this.nextQuestionHandler}>
                            Submit Answer
                        </button>
                    }

                    {currentQuestion === 10 && 
                        <button
                                className="finish-button"
                                onClick={this.finishHandler}
                        >
                            Finish
                        </button>}
                        </section>
                </section>
            </div>
            </>
        )
    }
}