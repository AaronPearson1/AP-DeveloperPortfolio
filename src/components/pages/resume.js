import React from 'react';
import '../../assets/css/contact.css';

export default function Resume() {
    return (
        <div className="resume-section" id="resume">
            <a href="https://docs.google.com/document/d/1WVlfeQWOtqWu7di1PzotCGvLZzIRFZGdjOhmlnZfro4/edit?usp=sharing" target="_blank" rel="noreferrer">
                <button className="link-list form" id="dl-btn" >Download Resume</button>
            </a>  
            <ul className='default-tag-structure resume-list'>
                <li><h3>Languages</h3></li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li><h3>Tools</h3></li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>Node</li>
                <li>Handlebars</li>
                <li>Command Line</li>
                <li>Mysql</li>
                <li>MongoDB</li>
                <li>Heroku</li>
                <li>Express</li>
                <li>React</li>
                <li>Github</li>
            </ul>
        </div>
    )
}