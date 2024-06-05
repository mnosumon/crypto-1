import React, { useState } from 'react'
import './singUp.css'
import BannerImg from '../../assets/images/banner.png'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import { singUp } from '../../warning/singUpWarn';

let initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthYear: new Date().getFullYear(),
    birthMonth: new Date().getMonth() + 1,
    birthDay: new Date().getDate(),
    gender: "",
}

const SignUp = () => {
    let [ageValidation, setAgeValidation] = useState("")
    let formik = useFormik({
        initialValues: initialState,
        validationSchema: singUp,
        onSubmit: ()=>{
            let currentDate = new Date()
            let pickedDate = new Date(
                formik.values.birthYear,
                formik.values.birthMonth - 1,
                formik.values.birthDay,
            )
            let adult = new Date(1970 + 18, 0, 1)
            let tooOld = new Date(1970 + 70, 0, 1)
            if (currentDate - pickedDate < adult) {
                return setAgeValidation("you are not 18+");
            }else if (currentDate - pickedDate > tooOld) {
                return setAgeValidation("you are 70+");
            }else{
                return setAgeValidation("");
            }
        }
    })

    let {errors, touched} = formik

    let storeYear = new Date().getFullYear()
    let years = Array.from(new Array(105), (val, index) => storeYear - index )
    let months = Array.from(new Array(12), (val, index) => 1 + index)
    let days = ()=>{
        return new Date(formik.values.birthYear, formik.values.birthMonth, 0).getDate()
    }
    let dates = Array.from(new Array(days()), (val, index) => 1 + index)
    
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
                            {
                                errors.firstName && touched.firstName && <p className='errors'>{errors.firstName}</p>
                            }

                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' value={formik.values.lastName}  className='registerField' type='text' placeholder='Enter Your last Name' name='lastName'/>
                            {
                                errors.lastName && touched.lastName && <p className='errors'>{errors.lastName}</p>
                            }
                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' value={formik.values.email} className='registerField' type='email' placeholder='Enter Your Email' name='email'/>
                            {
                                errors.email && touched.email && <p className='errors'>{errors.email}</p>
                            }
                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' value={formik.values.password} className='registerField' type="password" placeholder='Password' name='password'/>
                            {
                                errors.password && touched.password && <p className='errors'>{errors.password}</p>
                            }
                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' value={formik.values.password} className='registerField' type="password" placeholder='Confirmed Password' name='password'/>

                            <div className="birth">
                                <select onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' value={formik.values.birthYear} name='birthYear' className='birthField'>
                                    <option>Birth year</option>
                                    {
                                        years.map((item, index)=>(
                                            <option key={index}>{item}</option>
                                        ))
                                    }
                                </select>
                                <select onChange={formik.handleChange} value={formik.values.birthMonth} autoComplete='off' onBlur={formik.handleBlur} className='birthField' name="birthMonth">
                                    <option>Birth Month</option>
                                    {
                                        months.map((item, index) =>(
                                            <option key={index}>{item}</option>
                                        )) 
                                    }
                                </select>
                                <select onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' value={formik.values.birthDay} className='birthField' name="birthDay">
                                    <option>Birth day</option>
                                    {
                                        dates.map((item, index) =>(
                                            <option key={index}>{item}</option>
                                        )) 
                                    }
                                </select>
                            </div>
                            {                  
                            ageValidation && <p className='errors'>{ageValidation}</p>     
                            }
                            <div className='genderPart'>
                                <p >Select your gender</p>
                                <div className="gender">
                                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' value="male" type="radio" id='male' name='gender'/>
                                    <label htmlFor="male">Male</label>
                                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' value="female" type="radio" id='female' name='gender' />
                                    <label htmlFor="female">Female</label>
                                </div>
                                {
                                errors.gender && touched.gender && <p className='errors'>{errors.gender}</p>
                                }
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