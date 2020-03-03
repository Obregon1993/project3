import React, { Component } from "react";
import {Link} from "react-router-dom"

class Login extends Component {
    render() {
        return (

            <div className="container">
            <Link to="/">Main</Link>

                <div className="row">
                    <div className="col m6">
                        <h2 className="center-align">Login</h2>
                        <div className="row">
                            <form className="col s12">

                            <div className="row">
                                    <div className="input-field col s12">
                                        <input id="username" type="text" className="validate"></input>
                                        <label for="username">Username</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="email" type="email" className="validate"></input>
                                        <label for="email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="pass" type="password" className="validate"></input>
                                        <label for="pass">Password</label>
                                    </div>
                                </div>
                                
                                <div className="divider"></div>
                                <div className="row">
                                    <div className="col m12">
                                        <p className="right-align">
                                            <button className="btn btn-large waves-effect waves-light" type="button" name="action">Login</button>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Login;
