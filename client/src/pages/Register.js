import React, {Component}from "react";
import {Input, Submit} from "../components/Form"
import { Link, Redirect  } from "react-router-dom";
import API from "../utils/API"

class Register extends Component {

    state = {
        nameRes: "",
        passwordRes: "",
        teteRes: "",
        teteCRes: "",
        emailRes: "",
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
        const test={thisEmail:this.state.emailRes,thisName:this.state.nameRes}
        API.wellcomeEmail(test)
        if (this.state.nameRes && this.state.teteRes && this.state.teteCRes === this.state.teteRes){
            API.addUser({
                name: this.state.nameRes.toLocaleLowerCase(),
                email: this.state.emailRes,
                tete: this.state.teteRes

            }).then(res => {
                this.setState({ validMsg: res.data})
               
            })
            .catch(err => console.log(err.message));
            this.setState({ nameRes: "", emailRes: "",teteRes: "", teteCRes: ""})
        } else {
            alert("Not valid")
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
                    <label>Email</label>
                    <Input
                        value={this.state.emailRes}
                        onChange={this.handleInputChange}
                        name="emailRes"
                        type="email"
                    />
                    <label>Password</label>
                    <Input
                        value={this.state.teteRes}
                        onChange={this.handleInputChange}
                        name="teteRes"
                        type="password"
                    />
                    <label>Confirm password</label>
                    <Input
                        value={this.state.teteCRes}
                        onChange={this.handleInputChange}
                        name="teteCRes"
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