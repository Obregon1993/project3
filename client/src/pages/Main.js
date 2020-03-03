import React, {Component}from "react";
import {Nav, Login, Register, LogOut, LogName} from "../components/Nav"
import PageCont from "../components/PageCont"
import API from "../utils/API";

class Main extends Component {
    state = {
        userName: "",
        tokenValid: null
    }

    componentDidMount = () => {
        let jwt = localStorage.getItem('token')
      API.Auth({
        token: jwt
      }).then(res => {
          if(res.data !== "notLogin"){
            this.setState({tokenValid: true})
            this.setState({userName: res.data.name})
            console.log(res.data)
          } else {
            this.setState({tokenValid: false})
          }
      })
    }

    logOut = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }

    renderComponents = () => {
        if(this.state.tokenValid === false){
            return (
                <div className="mainLog">
                <Login/>
                <Register/>
                </div>
            )
        } else if(this.state.tokenValid === true){
            return (
                <div className="mainLog">
                <LogName>{this.state.userName}</LogName>
                <LogOut onClick={this.logOut}/>
                </div>
            )
        
        }
    }




    render(){
        return(
        <div>
            <Nav>
                <div>SYKYC</div>
                {this.renderComponents()}
            </Nav>
            
            <PageCont>
                <div className="bg"></div>
                <div className="mainText">
                    <h4>Sharpen your coding skills with SYKYC</h4>
                    <hr/>
                    <h5>Coding trivia in the industry's leading languages</h5>
                    <p>Challenge your friends and push coding knowledge to a new level when you sign up for SYKYC</p>
                </div>
                <div className="wrapper">
                    <div className="selections">

                    </div>
                </div>
            </PageCont>
        </div>
            
        )
        
    }

}

export default Main;