import "./login.scss";
import {Link, useNavigate} from "react-router-dom";
import {useState,useContext} from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";

export default function Login() {

const [email,setEmail]= useState("");
const [password,setPassword]= useState("");
const {dispatch}= useContext(AuthContext)
const navigate= useNavigate();

const handleClick= async(e)=>{

    e.preventDefault();
    login({email,password},dispatch);
    navigate("/");
}

    return (
        <div className='login'>


            <div className="top">

                <div className="wrapper">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="netflix logo" />
                
                </div>

                <div className="container">

                    <form >
                        <h1>Sign In</h1>
                        <input type="email" value={email} placeholder="Email or Phone Number" onChange={(e)=>{setEmail(e.target.value)}} />
                        <input type="password" value={password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
                        <button className="loginButton" onClick={handleClick}>Sign In</button>
                        <span>New to Netflix ?  <Link to="/register" className="link"> <b>Sign Up Now.</b> </Link>  </span>
                        <small> This page is protected by google reCAPTCHA  to ensure you are not a bot <b>Learn more.</b> </small>
                    </form>
                    
                </div>
            </div>

        </div>
    )
}
