import React from 'react';
import './Hero.css';
import MyAvatar from './assets/me.jpg';



function Hero() {
    return (
        <div className='hero'>
            <div className='hero-container'>
                <div className='hero-image'>
                    <img className='hero-image-me' src={MyAvatar} alt="Jaqueline Bianco avatar" />
                </div>

                <div className='hero-text'>
                    <h1>Jaqueline Bianco</h1>
                    <h2>Strategy & Insights 🎮</h2>
                    <p>Hello there! </p>

                    <p>I'm Jaqueline, passionate about Brand Strategy, Research & Insights.</p>

                    <p>I am graduated in Social Communication with emphasis on Advertising and I have a strong background in digital marketing, especially in SEO and Business Intelligence.</p>

                    <p>I challenged myself to develop my portfolio website and here we are! I built this website from scratch, using ReactJS, HTML and CSS.</p>

                    <p>At the moment, I'm getting specialized in the Gaming Industry. My goal is to use my experience to contribute to this market and help to build a safe space to minority groups. </p>

                    <p><strong><a href='https://www.linkedin.com/in/jaquelinebianco/'>LinkedIn</a> | <a href='mailto:jaquezubieta@gmail.com'>E-mail</a> | <a href='https://www.exophase.com/user/jaquezux/'>My Gaming Achievements</a></strong></p>

                </div>
            </div>
        </div>
    )
}

export default Hero