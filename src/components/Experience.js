import React from 'react';
import ExperienceCard from './ExperienceCard';
import './Experience.css';
import { FaMoon } from "react-icons/fa";



function Experience() {
    return (
        <div className='experience-wrapper-general'>
            <img className='divisor' alt="Cloud gif" src="https://i.pinimg.com/originals/f1/e1/39/f1e13922f700ec3a41e469f7412416ba.gif"></img>
            <h2 className='my-experience' id='experience'>My experience</h2>
            <p className='my-experience-subtitle'>Visit my <a href='https://www.linkedin.com/in/jaquelinebianco/'>LinkedIn</a> profile to see more details.</p>

            <div className='experience-container'>
                <div className='experience-card'>
                    <FaMoon className='experience-icon' />
                    <ExperienceCard
                        title="Busines Intelligence Analyst"
                        subtitle="Mirum Agency"
                        description="Worked on e-commerce projects, mainly in the setup stage of new accounts. My team was responsible for attending a brazilian footwear e-commerce and our duty was to help them make data-based decisions."
                    />
                </div>

                <div>
                    <h4 className='experience-period'>9 months</h4>
                </div>

            </div>

            <div className='experience-container'>
                <div className='experience-card'>
                    <FaMoon className='experience-icon' />
                    <ExperienceCard
                        title="SEO Analyst"
                        subtitle="Conversion Agency"
                        description="Participated in a 3 month special project of content strategy for informational queries for a car rental company. For this project, the focus was on content creation about touristic places in Brazil where you can visit with a rental car."
                    />
                </div>

                <div>
                    <h4 className='experience-period'>3 months</h4>
                </div>

            </div>

            <div className='experience-container'>
                <div className='experience-card'>
                    <FaMoon className='experience-icon' />
                    <ExperienceCard
                        title="SEO Analyst"
                        subtitle="Mirum Agency"
                        description="Planning SEO strategies to increase organic traffic for ongoing management clients in the agency. Experience with different market sectors and technologies. First contact with Scrum Agile methodology and Jira for task management."
                    />
                </div>

                <div>
                    <h4 className='experience-period'>4 years</h4>
                </div>

            </div>

            <div className='experience-container'>
                <div className='experience-card'>
                    <FaMoon className='experience-icon' />
                    <ExperienceCard
                        title="SEO Intern"
                        subtitle="Bluefoot Agency"
                        description="My first experience with Search Engine Optimization, especificly with VTEX CMS. In this role, I could start to learn about Technical SEO, code analysis and ranking factors."
                    />
                </div>

                <div>
                    <h4 className='experience-period'>10 months</h4>
                </div>

            </div>
        </div>
    )
}

export default Experience