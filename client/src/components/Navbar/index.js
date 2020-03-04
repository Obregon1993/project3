import React from "react"
import { Link } from "react-router-dom"
import Newlogo from "./Newlogo.png"


function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper black">
                <div style={{float: 'left', marginTop: '-15px'}}>
                <Link to="/"><img src={Newlogo} alt="icon" height="100" width="100" className="brand-logo"></img></Link>
                </div>
                <ul id="nav-mobile" className="hide-on-med-and-down" style={{marginLeft: '100px'}}>

                    <li><Link to="/login" className="red-text text-darken-4"><strong>Login</strong></Link></li>
                    <li><a href="badges.html" className="red-text text-darken-4"><strong>Sign Up</strong></a></li>
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/login" className="waves-effect waves-light btn-small red darken-4 white-text"><i class="material-icons right">arrow_forward</i>Get Started</Link></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;