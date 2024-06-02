import React from 'react'
import './login.css'
import BannerImg from '../../assets/images/banner.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <section id='login' style={{backgroundImage: `url(${BannerImg})`}}>
        <div className="container">
            <div className="login">
                <div className="login_wrapper">
                    <div className="login_title">
                        <h3>Welcome Back!</h3>
                        <span>Please login to your account</span>
                    </div>
                    <form action="" className='form'>
                        <div className="form_wrapper">
                            <input className='inputField' type='email' placeholder='Enter Your Email' name='email'/>
                            <input className='inputField' type="password" placeholder='Password'/>
                        </div>
                        <button className='login_btn'>Login</button>
                    </form>
                    <div className="notSingup">
                        <span>Don’t have any account? <Link to="/signUp">Sign Up</Link></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Login