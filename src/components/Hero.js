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
                    <h2>Digital Strategy | SEO | Data Analytics</h2>
                    <p>Hello there! </p>

                    <p>My name is Jaqueline and I'm from Brasil. Currently, I'm living in Helsingborg, in Sweden.</p>

                    <p>I am graduated in Social Communication and <strong>I work with Digital Strategy</strong>. I have experience with <strong>SEO, Data Analysis and Business Intelligence</strong>.</p>

                    <p>In 2022, I started to study programming logic, and I've made some personal projects using Python, HTML, CSS and ReactJS. This website is a result of my studies. I developed it from scratch, using React. </p>

                    <p><strong><a href='https://www.linkedin.com/in/jaquelinebianco/'>LinkedIn</a> | <a href='https://www.instagram.com/jaquezux/'>Instagram</a> | <a href='mailto:jaquezubieta@gmail.com'>E-mail</a></strong></p>



                </div>
            </div>
        </div>
    )
}

export default Hero