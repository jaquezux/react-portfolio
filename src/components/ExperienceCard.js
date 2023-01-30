import React from 'react';
import './Experience.css';


function ExperienceCard({ title, subtitle, description }) {
    return (
        <div className='experience-wrapper'>
            <h2 className='experience-title'>{title}</h2>
            <h3 className='experience-subtitle'>{subtitle}</h3>
            <p className='experience-description'>{description}</p>
        </div>
    )
}

export default ExperienceCard