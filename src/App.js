//U05721483
import React from 'react'
import './App.css';

function App() {
  const skills=[
    {id: 1, name: 'Javacript', level: 'Intermediate'},
    {id: 2, name: 'Python', level: 'Beginner'},
    {id: 3, name: 'Css', level:'Intermediate'},
    {id: 4, name:'React', level: 'Beginner'},
    {id: 5, name:'Excel', level:'Advanced'},
    {id: 6, name:'HTML', level:'Intermediate'}
  ];
  const experience=[
    {id: 1, title: 'Receptionist and Manager of Commerce Club', company:'Oxford Exchange', duration:'May 2022-January 2024' },
  ];

  const education=[
    { id:1, institution:'University of South Florida', degree:'B.S in Business Analytics and Information Systems', years: '2021-2025'}]

  return (
    <div className="App">
      <header className="App-header">
       <h1>Sonoma Stea </h1>
    </p> 
     A dedicated and eager to learn student studying a bachelors degree at the University of South Florida. 
     With a passion for analytics and data, my interest is peaked by learning internal and external operations
     of data and technology. 
    <p>
    
     </p>LinkedIn: linkedIn.com/sonomastea / Email: sonomastea@gmail.com</p>
         
    </header>
   
   <section> 
      <h2>Skills</h2>
     <ul>
      {skills.map(skill => (
        <li key= {skill.id}>{skill.name}-{skill.level}</li>
      ))};
     <ul>
     </section>
    
    <section>
     
      <h2> Experience</h2>
      {experience.map(experience =>(
        div key={exp.id}>
        <h3> {experience.title}, {experience.company}, {experience.time}</h3>
        </div>
        </section>

      )};

    
     <section>
      <h2> Education</h2>
      {education.map(education=> (
        <div key = {edu.id}> 
        <h3> {education.degree}, {education.institution}, {education.years}</h3>
        </div>
        </section>
      ))};


