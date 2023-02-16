import React from 'react';
import './Footer.css';
import './Goodreads.css';
import GoodreadsLogo from './assets/goodreads-logo.png';

function Footer() {
  return (
    <div className='footer-wrapper'>
      <div className='footer-container'>
        <ul className='social-container'>
          <li>
            <a href='https://www.linkedin.com/in/jaquelinebianco/'><img className='social-image' alt='Linkedin icon' src='https://i.pinimg.com/564x/e3/7b/1e/e37b1e7d86494c58d4e9a218bc99e580.jpg' /></a>
            <a href='mailto:jaquezubieta@gmail.com'><img className='social-image' alt='Gmail icon' src='https://i.pinimg.com/564x/ff/5d/d7/ff5dd70c2e5995e54901920130a59833.jpg' /></a>
            <a href='https://www.instagram.com/jaquezux/'><img className='social-image' alt='Instagram icon' src='https://i.pinimg.com/564x/2d/c7/07/2dc707b13a944f8c6c0abfb6ca957788.jpg' /></a>
          </li>
        </ul>

        <img className='kaonashi-gif' alt='kaonashi-gif' src='https://i.pinimg.com/originals/24/36/3e/24363e015bff21d5da4092cfd09a49ab.gif' />


        {/* Goodreads widget */}
        <div className="gr_challenge_11633">
          <div className="gr_challenge_progress_body_11633">
            <h3 className="h3-goodreads">
              <img alt='jaquezux-goodreads-logo' className="h3-goodreads-image" src={GoodreadsLogo}></img>
              <a className="a-goodreads" rel="nofollow" href="https://www.goodreads.com/challenges/11633-2023-reading-challenge">2023 Reading Challenge</a>
            </h3>

            <div>
              <a href="https://www.goodreads.com/challenges/11633-2023-reading-challenge"><img className="image-goodreads" alt="2023 Reading Challenge" src="https://images.gr-assets.com/challenges/1670887106p2/11633.jpg" /></a>
            </div>
            <div>
              <a className='a3-goodreads' href="https://www.goodreads.com/user/show/137831775-jaque">jaque has read 5 books toward her goal of 30 books.</a>
            </div>

            <div className="div4">
              <div className="div5">
                <span style={{ visibility: `hidden` }}>hide</span>
              </div>
            </div>
            <div className="div6">
              <a className='a4-goodreads' href="https://www.goodreads.com/user_challenges/38676051">5 of 30 (17%)</a>
            </div>
          </div>
          <script src="https://www.goodreads.com/user_challenges/widget/137831775-jaque?challenge_id=11633&v=2"></script>
        </div>
      </div>
    </div>

  )
}

export default Footer