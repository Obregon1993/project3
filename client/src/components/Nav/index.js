import React from "react";
import { Link } from "react-router-dom";


export function Nav(props) {
    return <div className="nav">{props.children}</div>
}

export function LogName(props){
    return <div id="name">{props.children}</div>
}

export function Login() {
    return <Link to="/login">Login</Link>
}

export function LogOut(props) {
    return <button {...props}>LogOut</button>
}