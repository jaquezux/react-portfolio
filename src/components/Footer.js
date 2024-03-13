import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-wrapper'>
      <div className='footer-container'>
        <ul className='social-container'>
          <li>
            <a href='https://www.linkedin.com/in/jaquelinebianco/' target="_blank" rel="noreferrer"><img className='social-image' alt='Linkedin icon' src='https://i.pinimg.com/564x/e3/7b/1e/e37b1e7d86494c58d4e9a218bc99e580.jpg'/></a>
            <a href='mailto:jaquezubieta@gmail.com' target="_blank" rel="noreferrer"><img className='social-image' alt='Gmail icon' src='https://i.pinimg.com/564x/ff/5d/d7/ff5dd70c2e5995e54901920130a59833.jpg' /></a>
            <a href='https://www.instagram.com/jaquezux/' target="_blank" rel="noreferrer"><img className='social-image' alt='Instagram icon' src='https://i.pinimg.com/564x/2d/c7/07/2dc707b13a944f8c6c0abfb6ca957788.jpg' /></a>
          </li>
        </ul>

        <p className='footer-text'>Developed with 🤍 by Jaqueline Bianco</p>

        <img className='kaonashi-gif' alt='kaonashi-gif' src='https://i.pinimg.com/originals/24/36/3e/24363e015bff21d5da4092cfd09a49ab.gif' />

      </div>
    </div>

  )
}

export default Footer