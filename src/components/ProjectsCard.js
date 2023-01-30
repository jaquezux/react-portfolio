import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';


function ProjectsCard({ src, alt, imgsrc, title, description }) {
    return (
        <div>
            <div className='project-wrapper'>
                <Link to={src}>
                    <img className='project-image' alt={alt} src={imgsrc} />
                    <h2 className='project-title'>{title}</h2>
                    <p className='project-description'>{description}</p>
                </Link>
            </div>
        </div>
    )
}

export default ProjectsCard