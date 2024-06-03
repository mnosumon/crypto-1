import React from 'react'
import './singUp.css'
import BannerImg from '../../assets/images/banner.png'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';

let initialState = {
    fullName: "",
    email: "",
    password: "",
    id: "",
    phone: "",
    role: "",
    terms: "",
}

const SignUp = () => {
    let formik = useFormik({
        initialValues: initialState,
        onSubmit: ()=>{
            console.log("hello");
        }
    })
  return (
    <>
    <section id='login' style={{backgroundImage: `url(${BannerImg})`}}>
        <div className="container">
            <div className="login">
                <div className="login_wrapper">
                    <div className="login_title">
                        <h3>Create Account</h3>
                        <span>Fill in the details below to create an account</span>
                    </div>
                    <form action="" className='form'>
                        <div className="form_wrapper">
                            <input className='registerField' type='text' placeholder='Enter Your Full Name' name='name'/>
                            <input className='registerField' type='email' placeholder='Enter Your Email' name='email'/>
                            <input className='registerField' type='number' placeholder='your ID' name='id'/>
                            <input className='registerField' type='tel' placeholder='Your Mobile Number' name='phone'/>
                            <input className='registerField' type="password" placeholder='Password' name='password'/>
                            <input className='registerField' type="password" placeholder='Confirmed Password' name='password'/>
                            <select className='registerField' name="role" id="role">
                                <option>Select your role</option>
                                <option>333</option>
                                <option>444</option>
                                <option>555</option>
                            </select>
                            <div className="checkbox">
                                <input type="checkbox" checked="checked" className='check_Field' />
                                <p className='checkboxTerm'> I read and agree to the <Link>Terms & Conditions</Link></p>
                            </div>
                        </div>
                        <button type='submit' className='login_btn'>Registration</button>
                    </form>
                    <div className="notSingup">
                        <span>Already have an account? <Link to="/login">Login</Link></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default SignUp