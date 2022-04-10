import React from 'react';
import headshot from '../../assets/images/Berlin.png';

export default function AboutMe() {
    return (
        <div>
            <section id="about" className="default-tag-structure">
                <div>
                    <img className="headShot" src={headshot} alt="A headshot of the author." />
                </div>
                <h1>Aaron Pearson</h1>
                <p className="article-text">
                Best of both worlds: Developer and Tech Sales! I am an exceptional sales professional with a passion for learning and technology. 
                I have recently earned a Full Stack Development Certificate from the University of Central Florida which is just the start of my programming journey. 
                Some of the technologies I've learned include HTML, CSS, JavaScript, jQuery, Node, Express, SQL, Mongo and React.js as well deploying with technologies such as Heroku. 
                My favorite has been utilizing "SHOUT OUT" github to work on solo projects as well as collaborate and learn from peers. I look froward to continue expanding my knowledge
                and meeting other tech professionals along the way!! Go Knights!!
                </p>
            </section>
        </div>
    );
}