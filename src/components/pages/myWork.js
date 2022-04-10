import React from 'react';
import tech_talks from '../../assets/images/tech_talks.png';
import bkse from '../../assets/images/bkse.png';
import dbzcodequiz from '../../assets/images/dbzcodequiz.png';
import runbuddy from '../../assets/images/runbuddy.png';
import scribble from '../../assets/images/scribble.png';
import cloud_watchers from '../../assets/images/cloud_watchers.png';
import Project from './project.js';

const projects = [
    {
        deploy: 'https://aaronpearson1.github.io/CloudWatchers_WeatherDashboard/',
        image: cloud_watchers,
        name: 'Cloud Watchers Weather Dashboard',
        github: 'https://github.com/AaronPearson1/CloudWatchers_WeatherDashboard',
        description: `This app allows you to search for current and future weather conditions by city name.
        Once a city has been searched, the city is saved to local storage and I button is appended to the search section.`,
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'Bootstrap',
            'JQuery'
        ],
        key: 1,
    },
    {
        deploy: 'https://obscure-sea-76616.herokuapp.com/',
        image: tech_talks,
        name: 'Tech Talks',
        github: 'https://github.com/AaronPearson1/Tech_Talks',
        description: `Social Media Application where users can create an account and interact by posting content as well as commenting and users posts. 
        Super fun and great for technology and gaming content such as gaining insight from professionals, sharing articles, opinions, and more!!!`,
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'Handlebars',
            'Mysql',
            'Node.JS'
        ],
        key: 2,

    },
    {
        deploy: 'https://sleepy-mountain-35648.herokuapp.com/',
        image: bkse,
        name: 'BKSE',
        github: 'https://github.com/AaronPearson1/BKSE',
        description: `A Book Search Engine powered by google book search that allows user to explore and discover books. 
        Users can sign up to create an account and also start a collection of their favorite books or add new ones they may be interested in reading at a latter time.`,
        technologies: [
            'Handlebars.js',
            'Sequelize',
            'express-session',
            'JavaScript'
        ],
        key: 3,
    },
    {
        deploy: 'https://aaronpearson1.github.io/DragonBallZ_CodeQuiz_Challenge/',
        image: dbzcodequiz,
        name: 'Dragon Ball Z Ultimate Challenge Quiz',
        github: 'https://github.com/AaronPearson1/DragonBallZ_CodeQuiz_Challenge',
        description: `This applicaition serves a quiz to briefly test ones knowledge on Dragon Ball Z. Can you pass? Or can you get, as Vegeta says "OVER 9000!!!" ?"`,
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'Bootstrap',
            'JQuery'
        ],
        key: 4,
    },
    {
        deploy: 'https://aaronpearson1.github.io/run-buddy/',
        image: runbuddy,
        name: 'Run Buddy',
        github: 'https://github.com/AaronPearson1/run-buddy',
        description: `This application is a static webpage built with HTML and CSS. It allows users to log in and create an account to contact a gym member. Put you running shoes on!`,
        technologies: [
            'HTML',
            'CSS'
        ],
        key: 5,
    },
    {
        deploy: 'https://obscure-sands-79382.herokuapp.com/',
        image: scribble,
        name: 'Scribble',
        github: 'https://github.com/AaronPearson1/Scribble_NoteTaker',
        description: `This application is used to write and save notes. It uses 
        an Express.js back end and saves and retrieves note data from a JSON file. Awesome if you want to Scribble a quick reminder or plan events.`,
        technologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'express'
        ],
        key: 6,
    },
];

export default function MyWork() {
    return (
        <div className='default-tag-structure' id='my-work'>
            {projects.map((project) => (
            <Project 
            deploy={project.deploy}
            image={project.image}
            name={project.name} 
            github={project.github}
            description={project.description}
            tech={project.technologies}
            key={project.key} />
            ))}
        </div>
    );
}