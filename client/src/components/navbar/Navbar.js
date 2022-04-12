import logo from '../../assets/logo.svg'
import { useContext, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './navbar.scss';
import Swal from 'sweetalert2'
import { GlobalContext } from '../../context/GlobalContext'

export const NavbarB = () => {

    const [burgerClick, setBurgerClick] = useState(false)

    const {user, setUser} = useContext(GlobalContext)

    const onBurgerClick = () => {
        setBurgerClick(!burgerClick)
    }

    const token = localStorage.getItem('token')

    let navigate = useNavigate()

    const toSeller = () => {
        if (user) {
            if (user.seller) {
                navigate('/seller')
            } else {
                Swal.fire({
                    title: 'Do you want to become a seller?',
                    text: "By clicking yes you agree to always be amazing just like you are right now :')",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    cancelButtonText: 'No',
                    confirmButtonText: 'Yes'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        setUser(user => {
                            return { 
                              ...user, 
                              seller: true
                            }
                          })
                        Swal.fire({
                            title: 'Lets Go',
                            text: 'Now you can make (fake) money and get Rich',
                            icon: 'success',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Yay'
                        }).then(() => {
                            fetch(`https://o-food-delivery.herokuapp.com/userAuth/${user._id}`, 
                            { 
                              method: "PATCH"
                            });
                            navigate('/seller')
                          }
                        )}
                  })
            }
        } else {
            navigate('/seller')
        }
    }

    const onLogout = () => {
        localStorage.removeItem('token')
        navigate('/', {replace: true})
    }

  return (
    <div className='navbar-b'>
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/'} >
        <img src={logo} alt="logo" />
        </Link>    
        {token ? <ul className='navbar__list-b' >
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/explore'} >
            <li>Explore</li>
        </Link>    
            <li onClick={toSeller}>Seller</li>
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/cart'} >
            <li>Cart</li>
        </Link>    
            <li className='li-active' onClick={onLogout} >LogOut</li>
        </ul> 
        :
        <ul className='navbar__list-b'  style={{width: '200px'}}  >
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/login'} >
            <li>Login</li>
        </Link>    
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/signup'} >
            <li className='li-active' >SignUp</li>
        </Link>    
        </ul> }
        <div onClick={onBurgerClick} className={`${burgerClick && 'nav-icon-open'  } nav-icon `}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        {token ? <ul onClick={onBurgerClick} className={`${burgerClick && 'navbar-res-open'} navbar-res`}>
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/explore'} >
            <li>Explore</li>
        </Link>    
            <li onClick={toSeller}>Seller</li>
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/cart'} >
            <li>Cart</li>
        </Link>    
            <li onClick={onLogout} >LogOut</li>
        </ul> 
        :
        <ul onClick={onBurgerClick} className={`${burgerClick && 'navbar-res-open'} navbar-res`}>
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/login'} >
            <li>Login</li>
        </Link>    
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/signup'} >
            <li>SignUp</li>
        </Link>    
        </ul> }
    </div>
    )
};

export const NavbarW = () => {

    const [burgerClick, setBurgerClick] = useState(false)

    const {user, setUser} = useContext(GlobalContext)


    const onBurgerClick = () => {
        setBurgerClick(!burgerClick)
    }

    const token = localStorage.getItem('token')

    let navigate = useNavigate()

    const toSeller = () => {
        if (user) {
            if (user.seller) {
                navigate('/seller')
            } else {
                Swal.fire({
                    title: 'Do you want to become a seller?',
                    text: "By clicking yes you agree to always be amazing just like you are right now :')",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    cancelButtonText: 'No',
                    confirmButtonText: 'Yes'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        setUser(user => {
                            return { 
                              ...user, 
                              seller: true
                            }
                          })
                        Swal.fire({
                            title: 'Lets Go',
                            text: 'Now you can make (fake) money and get Rich',
                            icon: 'success',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Yay'
                        }).then(() => {
                            fetch(`https://o-food-delivery.herokuapp.com/userAuth/${user._id}`, 
                            { 
                              method: "PATCH"
                            });
                            navigate('/seller', {replace: true})
                          }
                        )}
                  })
            }
        } else {
            navigate('/seller')
        }
    }

    const onLogout = () => {
        localStorage.removeItem('token')
        navigate('/', {replace: true})
    }

  return (
    <div className='navbar-w'>
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/'} >
        <img src={logo} alt="logo" />
        </Link>    
        {token ? <ul className='navbar__list-w' >
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/explore'} >
            <li>Explore</li>
        </Link>    
        <li onClick={toSeller}>Seller</li>    
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/cart'} >
            <li>Cart</li>
        </Link>    
            <li className='li-active' onClick={onLogout}  >LogOut</li>
        </ul>
        :
        <ul className='navbar__list-w' style={{width: '200px'}} >
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/login'} >
            <li>Login</li>
        </Link>    
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/signup'} >
            <li className='li-active' >SignUp</li>
        </Link>    
        </ul>}
        <div onClick={onBurgerClick} className={`${burgerClick && 'nav-icon-open'  } nav-icon `}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
       {token ? <ul onClick={onBurgerClick} className={`${burgerClick && 'navbar-res-open'} navbar-res`}>
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/explore'} >
            <li>Explore</li>
        </Link>    
        <li onClick={toSeller}>Seller</li>
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/cart'} >
            <li>Cart</li>
        </Link>    
            <li onClick={onLogout} >LogOut</li>
        </ul>
        :
        <ul onClick={onBurgerClick} className={`${burgerClick && 'navbar-res-open'} navbar-res`}>
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/login'} >
            <li>Login</li>
        </Link>    
        <Link style={{ color:'inherit', textDecoration:'none' }} to={'/signup'} >
            <li>SignUp</li>
        </Link>    
        </ul>}
    </div>
    )
};
