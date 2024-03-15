import React from 'react'
import logo_image from './image/nav-logo.svg'
import logo_profile from './image/nav-profile.svg'

import './navbar.css'


const Navbar = () => {
    return (
        <div>
            <div className='navbar-container'>
                <section className='navbar-image'>
                    <img src={logo_image}></img>
                </section>

                <section>
                    <img src={logo_profile}></img>
                </section>
            </div>
            <hr></hr>
        </div>
    )
}

export default Navbar;