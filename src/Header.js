import React from 'react'
import './Header.css'
import logo from './Images//logo.png'

const Header = () => {
  return (
    <nav>
        <div className='logo'><img src={logo} alt="logo"/></div>
        <ul className="navbar">
            <li><a href="http://">About Us</a>
            </li>
            <li className='login'> <a href="http://"> <img src="https://cdn-icons-png.flaticon.com/512/310/310818.png" alt="Login" /> </a></li>
        </ul>
    </nav>

  )
}

export default Header
