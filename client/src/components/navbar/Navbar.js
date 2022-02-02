import logo from '../../assets/logo.svg'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import './navbar.scss';


export const NavbarB = () => {

    const [burgerClick, setBurgerClick] = useState(false)

    const onBurgerClick = () => {
        setBurgerClick(!burgerClick)
    }

  return (
    <div className='navbar-b'>
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/'} >
        <img src={logo} alt="logo" />
        </Link>    
        <ul className='navbar__list-b' >
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/explore'} >
            <li>Explore</li>
        </Link>    
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/login'} >
            <li>Login</li>
        </Link>    
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/signup'} >
            <li className='li-active' >Signup</li>
        </Link>    
        </ul>
        <div onClick={onBurgerClick} className={`${burgerClick && 'nav-icon-open'  } nav-icon `}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={`${burgerClick && 'navbar-res-open'} navbar-res`}>
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/explore'} >
            <li>Explore</li>
        </Link>    
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/login'} >
            <li>Login</li>
        </Link>    
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/signup'} >
            <li>SignUp</li>
        </Link>    
        </ul>
    </div>
    )
};

export const NavbarW = () => {

    const [burgerClick, setBurgerClick] = useState(false)

    const onBurgerClick = () => {
        setBurgerClick(!burgerClick)
    }

  return (
    <div className='navbar-w'>
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/'} >
        <img src={logo} alt="logo" />
        </Link>    
        <ul className='navbar__list-w' >
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/explore'} >
            <li>Explore</li>
        </Link>    
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/login'} >
            <li>Login</li>
        </Link>    
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/signup'} >
            <li className='li-active' >Signup</li>
        </Link>    
        </ul>
        <div onClick={onBurgerClick} className={`${burgerClick && 'nav-icon-open'  } nav-icon `}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={`${burgerClick && 'navbar-res-open'} navbar-res`}>
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/explore'} >
            <li>Explore</li>
        </Link>    
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/login'} >
            <li>Login</li>
        </Link>    
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/signup'} >
            <li>SignUp</li>
        </Link>    
        </ul>
    </div>
    )
};
