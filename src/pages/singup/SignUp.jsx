import React from 'react'
import './singUp.css'
import BannerImg from '../../assets/images/banner.png'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';

let initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    terms: "",
}

const SignUp = () => {
    let formik = useFormik({
        initialValues: initialState,
        onSubmit: ()=>{
            console.log("hello");
        }
    })
    console.log(formik.values);
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
                    <form onSubmit={formik.handleSubmit} action="" className='form'>
                        <div className="form_wrapper">
                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' value={formik.values.firstName}  className='registerField' type='text' placeholder='Enter Your First Name' name='firstName'/>

                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' value={formik.values.lastName}  className='registerField' type='text' placeholder='Enter Your last Name' name='lastName'/>

                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' value={formik.values.email} className='registerField' type='email' placeholder='Enter Your Email' name='email'/>
                            
                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' value={formik.values.password} className='registerField' type="password" placeholder='Password' name='password'/>

                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' value={formik.values.password} className='registerField' type="password" placeholder='Confirmed Password' name='password'/>

                            <div className="birth">
                                <select className='birthField' name="birthYear" id="role">
                                    <option>Birth year</option>
                                    <option>333</option>
                                    <option>444</option>
                                    <option>555</option>
                                </select>
                                <select className='birthField' name="birthMonth" id="role">
                                    <option>Birth Month</option>
                                    <option>333</option>
                                    <option>444</option>
                                    <option>555</option>
                                </select>
                                <select className='birthField' name="birthDay" id="role">
                                    <option>Birth day</option>
                                    <option>333</option>
                                    <option>444</option>
                                    <option>555</option>
                                </select>
                            </div>
                            <div className='genderPart'>
                                <p >Select your gender</p>
                                <div className="gender">
                                    <input type="radio" id='male' name='gender'/>
                                    <label htmlFor="male">Male</label>
                                    <input type="radio" id='female' name='gender' />
                                    <label htmlFor="female">Female</label>
                                </div>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" className='check_Field' />
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