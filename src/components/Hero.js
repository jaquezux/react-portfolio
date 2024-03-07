import React from 'react';
import './Hero.css';
import MyAvatar from './assets/jaqueline-avatar.png';



function Hero() {
    return (
        <div className='hero'>
            <div className='hero-container'>
                <div className='hero-image'>
                    <img className='hero-image-me' src={MyAvatar} alt="Jaqueline Bianco avatar" />
                </div>

                <div className='hero-text'>
                    <h1>Jaqueline Bianco</h1>
                    <h2>Translation & Localization</h2>

                    <p>I'm passionate about words!</p>

                    <p>With a degree in Communications, I work with translation and localization of English content to Brazilian Portuguese.</p>

                    <p>My goal is to make your product accessible for Portuguese speakers, improving user experience, customer engagement and business expansion.</p>

                </div>
            </div>
        </div>
    )
}

export default Hero