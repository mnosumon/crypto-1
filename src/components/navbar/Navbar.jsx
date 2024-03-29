import React from 'react'
import './navbar.css'
import Logo from '../../assets/images/logo.png'

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
                        <a href="#">
                            <img src={Logo} alt="logo" />
                        </a>
                    </div>
                    <div className="loginRegistration">
                        <button className='nav_btn'>Login</button>
                        <button className='nav_btn'>Registration</button>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar