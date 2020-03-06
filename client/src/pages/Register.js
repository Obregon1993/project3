import React, {Component}from "react";
import {Input, Submit} from "../components/Form"
import { Link, Redirect  } from "react-router-dom";
import API from "../utils/API"

class Register extends Component {

    state = {
        nameRes: "",
        passwordRes: "",
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
    

    handleFormRegister = event => {
        event.preventDefault();
        if (this.state.nameRes && this.state.passwordRes){
            API.addUser({
                name: this.state.nameRes,
                password: this.state.passwordRes
            }).then(res => {
                this.setState({ validMsg: res.data})
            }).catch(err => console.log(err));
            this.setState({ nameRes: "", passwordRes: ""})
        } else {
            alert("Name and Password is Require")
        }
        
    }


    render(){
        if(this.state.tokenValid === true){
            return <Redirect to='/dashboard'/>
        } else if (this.state.tokenValid === false){
            return(
                <div className="logWrapper">
                <form>
                    <h2>Register</h2>
                    <h3>{this.state.validMsg}</h3>
                    <label>Name</label>
                    
                    <Input
                        value={this.state.nameRes}
                        onChange={this.handleInputChange}
                        name="nameRes"
                        type="text"
                    />
                    <label>Password</label>
                    <Input
                        value={this.state.passwordRes}
                        onChange={this.handleInputChange}
                        name="passwordRes"
                        type="password"
                    />
                    <Submit
                        onClick={this.handleFormRegister}
                    />
                    <Link to="/login">Login</Link>
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

export default Register;