import React, { Component } from "react";
import {Link} from "react-router-dom"
import axios from 'axios'

class Login extends Component {
    state ={
        userName: "",
        email:"",
        password:""
    }

    handleChange = (e)=>{
        const {name, value} = e.target
        console.log(name, value)
        this.setState({[name]: value})

    }

    
    handleLogin = ()=>{
        const {userName, email, password} = this.state
        // const payload ={userName: userName, email: email, password:password}
        const payload ={userName, email, password}

        axios.post("/ourLoginApi", payload).then((res)=>{
            console.log(res)
        })
    }


    state = {
        nameLog: "",
        passwordLog: ""
    }



    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };


    render() {
        return (

            <div className="container" id="loginContainer" style={{background:"white", fontSize: '15px'}}>
            <Link to="/">Main</Link>

                <div className="row">
                    <div className="col m6">
                        <h2 className="center-align">Login</h2>
                        <div className="row">
                            <form className="col s12">

                            <div className="row">
                                    <div className="input-field col s12">
                        
                                        <input id="username" type="text" className="validate" name='userName' placeholder="Username" value={this.state.userName}  onChange={this.handleChange}></input>
                                    
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="email" type="email" className="validate" name='email' placeholder="email" value={this.state.email} onChange={this.handleChange}></input>
                                        
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="pass" type="password" className="validate" name='password' placeholder= "password" value={this.state.password} onChange={this.handleChange}></input>
                                        
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
