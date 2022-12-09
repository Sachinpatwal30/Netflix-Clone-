import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
    Navigate("/")

  };

  return (
    <div className="login">
      
      <form className="loginForm">
      <h1 className="title"> Admin's Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="loginInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="loginInput"
          onChange={(e) => setPassword(e.target.value)}
        />


        <button  className="loginButton" onClick={handleLogin} disabled={isFetching} >
          Login
        </button>
      </form>
    </div>
  );
}
