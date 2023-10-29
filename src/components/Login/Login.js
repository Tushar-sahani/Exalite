import React, { useState } from 'react'
import "./Login.css"
import {Link} from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Login = () => {
    const [slide, setSlide] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleSlide = () => {
        setSlide(!slide);
    }
    return (
        <div className="login">
            <div className={`registercontainer ${slide ? "right-panel-active" : ""}`}>
                <div className="form-container sign-up-container">
                    <form className='form' action="/">
                        <h2 className='head'>SCMXPertLite</h2>
                        <h4>Create Account</h4>
                        <div className='form-items'>
                            <label htmlFor="" className='form-label'>What Should We Call you?*</label>
                            <input type="text" placeholder="Enter your full name" />
                        </div>
                        <div className='form-items'>
                            <label htmlFor="" className='form-label'>Email address*</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className='form-items'>
                            <label htmlFor="" className='form-label'>Create a New password*</label>
                            <input type={showPassword ? 'text' : 'password'} placeholder="Enter New password" />
                            <div className="password-toggle" onClick={togglePasswordVisibility}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                        <div className='form-items'>
                            <label htmlFor="" className='form-label'>Confirm New password*</label>
                            <input type={showPassword ? 'text' : 'password'} placeholder="Enter New password" />
                            <div className="password-toggle" onClick={togglePasswordVisibility}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                        <p className='p text-black-50 fs-6'>I have read and I accept the Privacy Policy & Conditions of use</p>
                        <button className='button'>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form className='form' action="/">
                        <h2 className='head'>SCMXPertLite</h2>
                        <h4>Sign in</h4>
                        <div className='form-items'>
                            <label htmlFor="" className='form-label'>Email address*</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className='form-items'>
                            <label htmlFor="" className='form-label'>Password*</label>
                            <input type={showPassword ? 'text' : 'password'} placeholder="Enter your password" />
                            <div className="password-toggle" onClick={togglePasswordVisibility}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                        <a href="/">Forgot your password?</a>
                        <button className='button' >Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h4 className='text-dark'>Welcome Back!</h4>
                            <p className='p text-dark'>
                                Welcome back! Please login with your personal info.
                            </p>
                            <button className="ghost button" id="signIn" onClick={handleSlide}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h4 className='text-dark'>Create your account</h4>
                            <p className='p text-dark'>Enter your personal details and start journey with us.</p>
                            <button className="ghost button" id="signUp" onClick={handleSlide}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;