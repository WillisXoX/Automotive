import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
/* import PropTypes from 'prop-types'; */

import '../components/Registration.css';
import Navbar from "./Navbar";

export default function Registration() {
    const [registerForm, setRegisterForm] = React.useState(true);

    function toogleRegisterForm() {
        return setRegisterForm(prevRegisterForm => !prevRegisterForm);
    }

    /* Sign In Input */
    const [signInFields, setsignInFields] = React.useState({
        email: '',
        password: ''
    });

    function handleSignInChange(event){
        const {name,value} = event.target;
        setsignInFields(prevSignIn => {
            return {
                ...prevSignIn,
                [name] : value 
            }
        });
        console.log(signInFields);
    }

    function signInSubmit(event) {
        event.preventDefault();

        axios.post('http://localhost:5000/signin', signInFields)
          .then((res) => {
            console.log(res.data);
            sessionStorage.setItem('token', JSON.stringify(res.data));
            window.location.replace('/home');
          })
          .catch((err) => {
            console.log(err);
        });
    }

    /* Sign Up Input */

    const [signUpFields, setsignUpFields] = React.useState({
        name: '',
        email: '',
        password: ''
    });

    function handleSignUpChange(event){
        const {name,value} = event.target;
        setsignUpFields(prevSignUp => {
            return {
                ...prevSignUp,
                [name] : value 
            }
        });
        console.log(signUpFields);
    }

    function signUpSubmit(event) {
        event.preventDefault();

        console.log('submit');

        axios.post('http://localhost:5000/signup', signUpFields)
          .then((res) => {
            console.log(res.data);
            window.location.replace('/home');
          })
          .catch((err) => {
            console.log(err);
        });
    }

    /* right-panel-active */
    return (

        <div className="registration-block">
            <Navbar />
            <div className="registration">

                <div className={registerForm ? 'container' : 'container right-panel-active'} id="container">
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>
                            <div className="social-container">

                            <Link className="social" to={'/'}><i className="fab fa-facebook-f"></i></Link>
                            <Link className="social" to={'/'}><i className="fab fa-google-plus-g"></i></Link>
                            <Link className="social" to={'/'}><i className="fab fa-linkedin-in"></i></Link>
                            {/* <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}

                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Name" name="name" value={signUpFields.name} onChange={handleSignUpChange} />
                            <input type="email" placeholder="Email" name="email" value={signUpFields.email} onChange={handleSignUpChange}/>
                            <input type="password" placeholder="Password" name="password" value={signUpFields.password} onChange={handleSignUpChange}/>
                            <button className="register-btn" type="submit" onClick={signUpSubmit}>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1>Sign in</h1>
                            <div className="social-container">
                            <Link className="social" to={'/'}><i className="fab fa-facebook-f"></i></Link>
                            <Link className="social" to={'/'}><i className="fab fa-google-plus-g"></i></Link>
                            <Link className="social" to={'/'}><i className="fab fa-linkedin-in"></i></Link>

                            {/* <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
                            </div>
                            <span>or use your account</span>
                            <input type="email" name='email' placeholder="Email" value={signInFields.email} onChange={handleSignInChange} />
                            <input type="password" name="password" placeholder="Password" value={signInFields.password} onChange={handleSignInChange}/>

                            {/* <a href="#">Forgot your password?</a> */}
                            <Link to={'/'}>Forgot your password?</Link>

                            <button className="register-btn" type="submit" onClick={signInSubmit}>Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" id="signIn" onClick={toogleRegisterForm}>Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" id="signUp" onClick={toogleRegisterForm}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}