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

    loadQuiz = (randomizedTriviaArr) => {
        const {currentQuestion} = this.state;
        this.setState(() => {
            return {
                // questions: triviaData[currentQuestion].question,
                // // questions: '',
                // options: triviaData[currentQuestion].incorrect,
                // answers: triviaData[currentQuestion].correct

                // questions: randomizedTriviaArr[currentQuestion].question,
                // options: randomizedTriviaArr[currentQuestion].incorrect,
                // answers: randomizedTriviaArr[currentQuestion].correct

                questions: randomizedTriviaArr[currentQuestion],
                // options: this.getAnswers(triviaData),
                // options: randomizedTriviaArr[currentQuestion].incorrect,
                // answers: randomizedTriviaArr[currentQuestion].correct


                
            }
        })
    }

    componentDidMount() {
        let randomQuestions = this.shuffle(triviaData);
        this.loadQuiz(randomQuestions);
        // let answersToRandQ = this.getAnswers(triviaData)
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
        // if(this.state.currentQuestion === triviaData.length -1) {
            if(this.state.currentQuestion === 10) {
            this.setState({
                quizEnd: true
            })
        }
        if (this.state.userAnswer === this.state.answer) {
            this.setState({
              score: this.state.score + 1
            });
          }
        }


            shuffle = (triviaData) => {
                // let triviaDataArr = []
                // let triviaDataArr = [triviaData]
                // const triviaDataMap = new Map(triviaData)
                // const QAndA = Object.fromEntries(triviaDataMap)
                // console.log(QAndA); // { foo: "bar", baz: 42 }

                let triviaDataArr = triviaData.map(q => q.question)
                let triviaAnsArr = triviaData.map(q => q.incorrect)
                let triviaCorArr = triviaData.map(q => q.correct)
                console.log(triviaAnsArr)//empty array


                let randomizedTriviaArr = []; //gets popuated by loop
                while (triviaDataArr.length > 0) {
                  let randomIndex = Math.floor(Math.random() * triviaDataArr.length); //create random number
                  randomizedTriviaArr.push(triviaDataArr[randomIndex]); //add choice randomly to arr
                  triviaDataArr.splice(randomIndex, 1); //cut out a piece of the array then resart loop
                }
                //when loop has finished, return random array
                // console.log(randomizedTriviaArr)
                return randomizedTriviaArr;


              }

        getAnswers = (triviaData) => {
            console.log(this.state.question)
            if (this.state.question === triviaData.question) {
                return triviaData.incorrect
            }


        }


    render() {
        const {questions, options, currentQuestion, correctAnswer, userAnswer, quizEnd} = this.state;
        const randomizedAnswers = this.shuffle(triviaData)
        // console.log(randomizedAnswers) // returns randomized questions with answers
        if (quizEnd) {
            return (
                <div>
                    <h2> Game Over.</h2>
                    <h2>Your score is {this.state.score} points</h2>
                    <p>The correct answers are:</p>
                    <ul>
                        {triviaData.map((item, index) => (
                            <>
                            <li
                            key={index}>{item.question}</li>
                            <li
                            key={index}>{item.correct}</li>
                            </>
                        ))}
                    </ul>
                    {}
                </div>
            )
        }

        return (
            <>
            {/* {randomizedAnswers.map((question) => (
                  <div>{question} </div>
                ))} */}
{/* 
            {randomizedAnswers.map((item, index) => (
                  <div key={index}>{item.question} </div>
                ))} */}


            <div className="finalDiv">
                <section className="outerCard">
                    <p>Score: {this.state.score}</p>
                    <h3>{questions}</h3>
                    <h5>{`Question ${currentQuestion} out of 10`}</h5>
                </section>
                
                {options.map(option => (
                    <ul className="list-items">
                        <button
                                variant="outline-light"
                                className= {`ui floating message options
                                    ${userAnswer === option ? "selected" : null}
                                    `}
                                onClick={() => this.checkAnswer(option)}
                        >
                            {option}
                        </button>
                    </ul>
                ))}

                {currentQuestion < 10 && 
                    <button
                            disabled={this.setState.disabled}
                            onClick={this.nextQuestionHandler}>
                        Submit Answer
                    </button>
                }

                {/* //BUTTON FOR FINAL Question */}
                {currentQuestion === 10 && 
                    <button
                            onClick={this.finishHandler}
                    >
                        Finish
                    </button>}
            </div>
            </>
        )
    }
}