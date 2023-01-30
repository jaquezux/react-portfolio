import React from 'react';
import './Navbar.css';


function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div>
                    <ul className='navbar-list' >
                        {/* <li className='navbar-item'>
                            <a className='navbar-link' href='#about' >About me</a>
                        </li> */}
                        <li className='navbar-item'>
                            <a className='navbar-link' href='#experience' >Experience</a>
                        </li>
                        <li className='navbar-item'>
                            <a className='navbar-link' href='#projects' >Projects</a>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar