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

                    <a href='https://drive.google.com/drive/folders/1VDdfCv6mRqpOgf4IXDOoT1TfUt4k7MDJ?usp=sharing'>Portfolio</a> || <a href='mailto:jaquezubieta@gmail.com'>E-mail</a>

                </div>
            </div>
        </div>
    )
}

export default Hero