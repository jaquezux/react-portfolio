import React from 'react';
// import { Link } from 'react-router-dom';
import './Projects.css';


function ProjectsCard({ src, alt, imgsrc, title, description }) {
    return (
        <div>
            <div className='project-wrapper'>
                <a href={src} target="_blank" rel="noreferrer">
                    <img className='project-image' alt={alt} src={imgsrc} />
                    <h2 className='project-title'>{title}</h2>
                    <p className='project-description'>{description}</p>
                </a>
            </div>
        </div>
    )
}

export default ProjectsCard