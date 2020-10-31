import React from 'react';
// import triviaData from './triviaData.json'
import './Home.css';

function Home() {
    return(
        <div className="About">
            <div className="all-about">
            <h3>Take a break from your work day and test your knowledge on some trivia.</h3>

<section className="how-to-play">
            <ul>How To Play:</ul>
            <li>Each question will be displayed 1 at a time</li>
            <li>The game is 10 questions.</li>
            <li>The correct answer will be revealed after the answer is submitted.</li>
            <li>At the end of the game, you will see your total score.</li>
            <li>No question will repeat.</li>
            </section>
            </div>
        </div>
    )
}

export default Home;