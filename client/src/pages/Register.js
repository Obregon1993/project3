import React, { Component } from "react";
import { Link} from "react-router-dom";
import {Input, Submit} from "../components/Form"
import API from "../utils/API"

class Register extends Component {

    state = {
        nameRes: "",
        passwordRes: "",
        validMsg: ""
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


    render() {
        return (

            <div className="container">
            <Link to="/">Main</Link>

                <div className="row">
                    <div className="col m6">
                        <h2 className="center-align">Register</h2>
                        <div className="row">
                            <form className="col s12">

                            <div className="row">
                                    <div className="input-field col s12">
                                    <Input
                                        value={this.state.nameRes}
                                        onChange={this.handleInputChange}
                                        name="nameRes"
                                        type="text"
                                        placeholder="Username"
                                    />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s12">
                                    <Input
                                        value={this.state.passwordRes}
                                        onChange={this.handleInputChange}
                                        name="passwordRes"
                                        type="text"
                                        placeholder="Password"
                                    />
                                    </div>
                                </div>
                                
                                <div className="divider"></div>
                                <div className="row">
                                    <div className="col m12">
                                        <p className="right-align">
                                            
                                            <Submit
                                            className="btn btn-large waves-effect waves-light"
                                                onClick={this.handleFormRegister}
                                            />
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
export default Register;
