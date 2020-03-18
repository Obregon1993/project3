<<<<<<< HEAD
import React, { Component } from "react";
import {Link} from "react-router-dom";



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
=======
import React, {Component}from "react";
import {Input, Submit} from "../components/Form"
import { Link, Redirect } from "react-router-dom";
import API from "../utils/API"

class Login extends Component {
    state = {
        nameLog: "",
        passwordLog: "",
        validMsg: "",
        tokenValid: null
    }

    componentDidMount = () => {
        document.body.style.backgroundColor = "white"
        let jwt = localStorage.getItem('token')
      API.Auth({
        token: jwt
      }).then(res => {
          if(res.data !== "notLogin"){
            this.setState({tokenValid: true})
          } else {
            this.setState({tokenValid: false})
          }
      })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };


    handleFormLogin = event => {
        event.preventDefault();
        if (this.state.nameLog && this.state.passwordLog){
            API.logUser({
                name: this.state.nameLog.toLocaleLowerCase(),
                password: this.state.passwordLog,
            }).then(res => {
                if(typeof res.data === 'object'){
                   localStorage.setItem('token', res.data.accessToken) 
                   this.setState({tokenValid: true})
                } else {
                    this.setState({ validMsg: res.data})
                }
            }).catch(err => console.log(err));
            this.setState({ nameLog: "", passwordLog: ""})
        } else {
            alert("Name and Password is Require")
        }
    }

    render(){
        if(this.state.tokenValid === true){
            return <Redirect to='/dashboard'/>
        } else if (this.state.tokenValid === false) {
            return(
                <div className="logWrapper">
                <form>
                
                
                    <h2>Login</h2>
                    <h3>{this.state.validMsg}</h3>
                    <label>Name</label>
                    <Input
                    value={this.state.nameLog}
                    onChange={this.handleInputChange}
                    name="nameLog"
                    type="text"
                    />
                    <label>Password</label>
                    <Input
                    value={this.state.passwordLog}
                    onChange={this.handleInputChange}
                    name="passwordLog"
                    type="password"
                    />
                    <  Submit
                    onClick={this.handleFormLogin}
                    />
                    <Link to="/register">Register</Link>
                    <br />
                    <Link to="/">Go Back</Link>
                
                </form>
                </div>
                
            )
        } else {
            return null
        }
        
    }

}

export default Login;
>>>>>>> camilo
