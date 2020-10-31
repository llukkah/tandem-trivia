import React from 'react';
// import triviaData from './triviaData.json'
import './Home.css';

function Home() {
    return(
        <div className="About">
        <p>Take a break from your work day and test your knowledge on some trivia.</p>

        <h4>How To Play:</h4>
        <h5>Each question will be displayed 1 at a time</h5>
        <h5>The game is 10 questions.</h5>
        <h5>The correct answer will be revealed after the answer is submitted.</h5>
        <h5>At the end of the game, you will see your total score.</h5>
        <h5>No question will repeat.</h5>
        </div>
    )
}

export default Home;