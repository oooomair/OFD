import logo from '../assets/logo.svg'
import {useState} from 'react'

const Navbar = () => {

    const [burgerClick, setBurgerClick] = useState(false)

    const onBurgerClick = () => {
        setBurgerClick(!burgerClick)
    }

  return (
    <div className='navbar'>
        <img src={logo} alt="logo" />
        <ul className='navbar__list' >
            <li>Explore</li>
            <li>Login</li>
            <li className='li-active' >Signup</li>
        </ul>
        <div onClick={onBurgerClick} className={`${burgerClick && 'nav-icon-open'  } nav-icon `}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={`${burgerClick && 'navbar-res-open'} navbar-res`}>
            <li>Explore</li>
            <li>Login</li>
            <li>SignUp</li>
        </ul>
    </div>
    )
};

export default Navbar;
