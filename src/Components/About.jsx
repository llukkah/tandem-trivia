import React from 'react';
import './About.css';

function About() {
    return(
        <div className="About">
            <section className="how-to-play">
                <h4 className="rules">How To Play:</h4>
                    <p className="rules">Each question will be displayed 1 at a time</p>
                    <p className="rules">The game is 10 questions.</p>
                    <p className="rules">The correct answer will be revealed after the answer is submitted.</p>
                    <p className="rules">At the end of the game, you will see your total score.</p>
                    <p className="rules">No question will repeat.</p>
            </section>
        </div>
    )
}

export default About;