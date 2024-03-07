import React from 'react';
import './Navbar.css';
import Logo from './assets/jaque-logo.jpg';


function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div>
                    <ul className='navbar-list' >
                        <li className='navbar-link'>
                            <a href='/'><img className='navbar-logo' src={Logo} alt='butterfly-logo'/ ></a>
                        </li>
                        {/* <li className='navbar-item'>
                            <a className='navbar-link' href='/?experience' >Experience</a>
                        </li> */}
                        {/* <li className='navbar-item'>
                            <a className='navbar-link' href='/projects' >Projects</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar