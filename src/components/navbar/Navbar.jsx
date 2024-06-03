import React from 'react'
import './navbar.css'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    window.addEventListener("scroll", function(){
        let navbar = document.querySelector("#navbar");
        navbar.classList.toggle("fixed", window.scrollY > 0)
    })
  return (
    <>
        <nav id='navbar'>
            <div className="container">
                <div className="nav_wrapper">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="loginRegistration">
                        <Link to="/login" className='nav_btn'>Login</Link>
                        <Link to="/signUp" className='nav_btn'>Registration</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar