import React, {Component}from "react";
import {LogOut, LogName} from "../components/Nav"
import Newlogo from "../components/Images/Newlogo.png"
import { Parallax, Background } from 'react-parallax';
import {Link} from "react-router-dom"
import API from "../utils/API";

class Main extends Component {
    state = {
        userName: "",
        tokenValid: null
    }
    

    componentDidMount = () => {
        document.body.style.backgroundImage = "url('#')"
        document.body.style.backgroundColor = "black"
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
                <div>
                <li><Link to="/login" className="red-text text-darken-4"><strong>Login</strong></Link></li>
                <li><Link to="/register" className="red-text text-darken-4"><strong>Sign Up</strong></Link></li>
                <li><Link to="/table" className="red-text text-darken-4"><strong>Score Table</strong></Link></li>
                {/*<Login/>
                <Register/>*/}
                </div>
            )
        } else if(this.state.tokenValid === true){
            return (
                <div>
                <li><LogName>Welcome {this.state.userName}</LogName></li>
                <li><LogOut onClick={this.logOut}/></li>
                <li><Link to="/table" className="red-text text-darken-4"><strong>Score Table</strong></Link></li>
                </div>
            )
        
        }
    }




    render(){
        return(
        <div>
            <div>
                <nav>
                    <div className="nav-wrapper black">
                        <div style={{ float: 'left', marginTop: '-15px' }}>
                            <Link to="/"><img src={Newlogo} alt="icon" height="100" width="100" className="brand-logo"></img></Link>
                        </div>
                        <ul id="nav-mobile" className="hide-on-med-and-down" style={{ marginLeft: '100px' }}>
                            {this.renderComponents()}
                        </ul>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {this.state.tokenValid  ? (
                                null
                            ):(
                                <li><Link to="/login" className="waves-effect waves-light btn-small red darken-4 white-text"><i className="material-icons right">arrow_forward</i>Get Started</Link></li>

                            )}
                            
                        </ul>
                    </div>
                </nav>
            </div>

            <Parallax strength={300}>
            <div style={{ height: '20px' }}></div>
            <Background className="custom-bg">
                <img src="https://hdblackwallpaper.com/wallpaper/2015/07/red-and-black-wallpaper-for-computer-10-free-wallpaper.jpg" alt="fill murray" />
            </Background>
            </Parallax>
            <Parallax
            blur={0}
            bgImage={require('../components/Images/binary_background.jpg')}
            bgImageAlt="firstImage"
            strength={200}
            >
            <div style={{ height: '80px' }}></div>

            </Parallax>
            <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../components/Images/red_background.png')}
            bgImageAlt="secondImage"
            strength={-200}

            >
            <div style={{ height: '300px', marginTop: "50px" }}>
                <div class="card transparent">

                    <div className="card-content white-text center-align">
                        <h3>So you know you code?</h3>
                        <h5>Sharpen your coding skills with <strong>SYKYC</strong></h5>
                        <h6>Coding quizzes in the industry's leading programming languages.</h6>
                    </div>
                    <div class="card-action center-align">
                        {this.state.tokenValid ? (
                            <Link to="/dashboard"  className="waves-effect waves-light btn-large red darken-4 white-text"><i class="material-icons right">arrow_forward</i>Return to Dashboard</Link>
                        ):(
                            <Link to="/login" className="waves-effect waves-light btn-large red darken-4 white-text"><i class="material-icons right">arrow_forward</i>Get Started</Link>
                        )}
                    </div>

                </div>
            </div>
            </Parallax>

            <Parallax
            blur={0}
            bgImage={require('../components/Images/binary_background.jpg')}
            bgImageAlt="firstImage"
            strength={200}
            >
            <div style={{ height: '80px' }}></div>
            </Parallax>
            <Parallax strength={300}>
                <div style={{ height: '100px' }}></div>
                <Background className="custom-bg">
                <img src="https://hdblackwallpaper.com/wallpaper/2015/07/red-and-black-wallpaper-for-computer-10-free-wallpaper.jpg" alt="fill murray" />
                </Background>
            </Parallax>

            {/* -----dynamic blur-----*/}
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={require('../components/Images/red_background.png')}
                bgImageSize={{width:'200px'}}
                bgImageAlt="secondImage"
                strength={-200}
            ></Parallax>
    
                
            {/*<Nav>
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
            </PageCont>*/}
        </div>
            
        )
        
    }

}

export default Main;