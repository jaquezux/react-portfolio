import React from 'react';
import ProjectsCard from './ProjectsCard';
import './Projects.css';
import Project1 from './assets/project1-pic.jpg';
import Project2 from './assets/project2-pic.jpg';
import Project3 from './assets/project3-pic.jpg';



function Projects() {
    return (

        <div className='projects-wrapper-general'>

            <div className='projects-titles-wrapper' id='projects'>
                <img className='divisor' alt="Cloud gif" src="https://i.pinimg.com/originals/f1/e1/39/f1e13922f700ec3a41e469f7412416ba.gif" />
                <h2 className='my-projects-wrapper-title'>My personal projects</h2>
                <a href='https://github.com/jaquezux/'> access Github repositories </a>
            </div>


            <div className='projects-container'>

                <div className='projects-card'>
                    <ProjectsCard
                        src="https://github.com/jaquezux/guess-the-number"
                        alt="Guess the number | Python"
                        imgsrc={Project3}
                        title="Guess the number | Python"
                        description="Guess the number game using Python."
                    />
                </div>

                <div className='projects-card'>
                    <ProjectsCard
                        src="https://github.com/jaquezux/python3-cases"
                        alt="Python studies"
                        imgsrc={Project2}
                        title="Python lessons"
                        description="All my beginner Python lessons."
                    />
                </div>

                <div className='projects-card'>
                    <ProjectsCard
                        src="https://github.com/jaquezux/login-python"
                        alt="Login Interface"
                        imgsrc={Project1}
                        title="Login Interface | Python"
                        description="Login Interface study using Python and Tkinter."
                    />
                </div>
            </div>
        </div>

    )
}

export default Projects