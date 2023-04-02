import React from 'react';
import ProjectsCard from './ProjectsCard';
import './Projects.css';
import Project1 from './assets/project1-pic.jpg';
import Project2 from './assets/project2-pic.jpg';
import Project3 from './assets/project3-pic.jpg';
import Project4 from './assets/project4-pic.jpg';
import Project5 from './assets/project5-pic.jpg';
import Project6 from './assets/project6-pic.jpg';



function Projects() {
    return (

        <div className='projects-wrapper-general'>

            <div className='projects-titles-wrapper' id='projects'>
                <img className='divisor' alt="Cloud gif" src="https://i.pinimg.com/originals/f1/e1/39/f1e13922f700ec3a41e469f7412416ba.gif" />
                <h2 className='my-projects-wrapper-title'>My personal projects</h2>
                <a href='https://github.com/jaquezux/' target="_blank" rel="noreferrer"> access Github repositories </a>
            </div>


            <div className='projects-container'>

                <div className='projects-card'>
                        <ProjectsCard
                            src="https://lookerstudio.google.com/s/sZCVWQ5_tEo"
                            alt="Traffic Dashboard | Looker Data Viz"
                            imgsrc={Project6}
                            title="Traffic Dashboard | Looker Data Viz"
                            description="Mockup dashboard developed in Looker using data provided by the tool."
                        />
                </div>

                <div className='projects-card'>
                        <ProjectsCard
                            src="https://public.tableau.com/app/profile/jaqueline.bianco/viz/JaquelinesGoodreadsStats/goodreads-stats-viz"
                            alt="Goodreads Stats | Tableau Data Viz"
                            imgsrc={Project5}
                            title="Goodreads Stats | Tableau Data Viz"
                            description="Data visualization with my Goodreads stats."
                        />
                </div>

                <div className='projects-card'>
                        <ProjectsCard
                            src="https://github.com/jaquezux/hellacopters-scraping"
                            alt="Hellacopters Scraping | Python"
                            imgsrc={Project4}
                            title="Hellacopters Scraping | Python"
                            description="Scraping Hellacopters discography using Python."
                        />
                </div>

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