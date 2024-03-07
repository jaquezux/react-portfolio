import React from 'react';
import './Experience.css';
import Steps from './assets/steps.png';




function Experience() {
    return (
        <div className='experience-wrapper-general'>
            {/* <img className='divisor' alt="Cloud gif" src="https://i.pinimg.com/originals/54/f4/2b/54f42b67b49b1b934065c8d1f2d91145.gif"></img> */}
            <h2 className='my-experience'>My work methodology</h2>

            <img className='experience-steps'  id='experience' src={Steps} alt="Jaqueline Bianco Translation" />


        </div>
    )
}

export default Experience