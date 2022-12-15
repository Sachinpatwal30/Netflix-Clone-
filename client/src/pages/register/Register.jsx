import axios from 'axios';
import React, { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./register.scss";



export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const emailRef = useRef();
    const navigate = useNavigate()

    const handleClick=()=>{

        console.log("i got clicked");

    }

    const handleStart = () => {
        setEmail(emailRef.current.value);
    };
    const handleFinish = async (e) => {
        e.preventDefault();
       
        try {

            const res = await axios.post("auth/register", { username, email, password });
            navigate("/login");

        } catch (error) {

            console.log(error);

        } };


    return (
        <div className='register'>

            <div className="top">

                <div className="wrapper">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="netflix logo" />
                    <button className='loginButton' onClick={handleClick}>Sign In</button>

                </div>

                <div className="container">
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>

                    {
                        (!email) ? (<div className="input">
                            <input type="email" placeholder='Email Address' ref={emailRef} />
                            <button className="registerButton" onClick={handleStart}>Get Started</button>
                        </div>) : (
                            <form className="input">
                                <input type="text" placeholder='Username'  onChange={(e) => { setUsername(e.target.value) }} />
                                <input type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
                                <button className="registerButton" onClick={handleFinish}>Start</button>
                            </form>
                        )
                    }

                </div>
            </div>

        </div>
    )
}
