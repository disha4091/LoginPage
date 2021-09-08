import React from 'react'
import { useState } from 'react';
import './LoginPage.css'
import googleLogo from './googleLogo.png';
import logo from './Logo.PNG'

const LoginpPage = () => {
    function signWithGoogle() {
        alert('You wish to sign in with google');
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        if (email && password) {
            alert('Login Successful!');

        }
        else {
            alert('Login Failed! Email and password must not be empty');

        }
    }
    return (
        <div className="LoginPageContainer">
            <img src={logo} className="logo" />
            <h1>Login</h1>
            <p className="greyText">See you growth and get consulting support!</p>
            <button className="googleSignup" onClick={signWithGoogle} ><img src={googleLogo} className="googleLogo" />  Sign in with google</button>
            <br></br><br></br>
            <p className="txtline"><span>or Sign in with email</span></p>
            <label className="">Email*</label>
            <br></br>
            <input type="email" required placeholder="mail@website.com" className="inpBox" onChange={(e) => { setEmail(e.target.value) }}></input>
            <br></br>
            <label className="">Password*</label>
            <br></br>
            <input type="Password" required placeholder="Min. 8 character" className="inpBox" onChange={(e) => { setPassword(e.target.value) }}></input>
            <br></br>
            <input type="Checkbox"></input>  Remember Me
            <a href="#" className="forgotPass">Forgot Password?</a>
            <br></br>
            <button className="loginbutton" onClick={login}>Login</button>
            <p className="notRegis">Not registered yet? <a href="#">Create an account</a></p>
        </div>
    )
}

export default LoginpPage
