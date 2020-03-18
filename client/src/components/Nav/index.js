import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
import "./style.css"
>>>>>>> camilo


export function Nav(props) {
    return <div className="nav">{props.children}</div>
}

export function LogName(props){
    return <div id="name">{props.children}</div>
}

export function Login() {
<<<<<<< HEAD
    return <Link to="/login">Login</Link>
}

export function LogOut(props) {
    return <button {...props}>LogOut</button>
=======
    return <Link to="/login" id="login">LOG IN</Link>
}

export function Register() {
    return <Link to="/register" id="register">SIGN UP</Link>
}

export function LogOut(props) {
    return <button style={{borderRadius: "40px", border: "solid red 1px", background: "black", color: "red", marginLeft: "5px" }} id="logout" {...props}>X</button>
>>>>>>> camilo
}