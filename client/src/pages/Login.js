import React, {Component}from "react";
import {Input, Submit} from "../components/Form"
import { Link, Redirect } from "react-router-dom";
import API from "../utils/API"

class Login extends Component {
    state = {
        nameLog: "",
        passwordLog: "",
        validMsg: "",
        tokenValid: null,
        //email:"",
       // show:false,
        //emailsent:false,
        //cantfind:false
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

    handleInputChange = ({target}) => {
        const { name, value } = target;
        this.setState({
          [name]: value
        });
    };
   

submitEmail=(event)=>{
    event.preventDefault();
    const test={real:this.state.email}
    API.getPass(test).then(res=>{
        if( res.data==='Correct'){
            this.setState({emailsent:!this.state.emailsent})
        }else{
            this.notfound();
        }
    })
}

    showEmailRecover=(event)=>{
        event.preventDefault()
        this.setState({show:!this.state.show})
    }

    notfound=()=>{
        this.setState({cantfind:!this.state.cantfind})
    }

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
                    <button onClick={this.showEmailRecover}>Forgot Pasword?</button>
                
                </form>
                
              {/* {this.state.show?
               <form onSubmit={this.submitEmail}>
               <div className='form-input'>
                 <input
                  type='email'
                  name='email'
                  placeholder='Enter your email'
                  value={this.state.email}
                  onChange={this.handleInputChange}
                 />
               </div>
               <button >Submit</button>
               </form>
               :null
               
               }
               {(this.state.emailsent?
               <h6>Password sent to your email</h6>
               :null)}
               {(this.state.cantfind?
               <h6>Your email does not match with our records</h6>
               :null)} */}
               
                </div>
                
                
            )
        } else {
            return null
        }
        
    }

}

export default Login;