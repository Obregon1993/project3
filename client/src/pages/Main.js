import React, {Component}from "react";
import PageCont from "../components/PageCont"
import {Nav, Login, LogOut, LogName} from "../components/Nav"
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
            return <Login/>
        } else if(this.state.tokenValid === true){
            return (
                <div>
                <LogName>{this.state.userName}</LogName>
                <LogOut onClick={this.logOut}/>
                </div>
            )
        
        }
    }




    render(){
        return(
        <PageCont>
            <Nav>
                <h1>Main</h1>
                {this.renderComponents()}
            </Nav>
        </PageCont>
            
        )
        
    }

}

export default Main;