import React from 'react';
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" />
        <ul className='navbar__list' >
            <li>Explore</li>
            <li>Login</li>
            <li className='li-active' >Signup</li>
        </ul>
    </div>
    )
};

export default Navbar;
