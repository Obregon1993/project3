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