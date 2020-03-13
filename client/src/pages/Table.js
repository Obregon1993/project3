import React, {Component}from "react";
import API from "../utils/API";
import {LogOut, LogName} from "../components/Nav"
import Newlogo from "../components/Images/Newlogo.png"
import { Parallax, Background } from 'react-parallax';
import {Link} from "react-router-dom"
import ScoreTable from '../components/ScoreTable'


class Table extends Component{
    state={
        usersArray:[]
    }
componentDidMount=()=>{
//this.setState({usersArray:API.topUsers()})
}
renderComponents = () => {
   
        return (
            <div>
            <li><Link to="/login" className="red-text text-darken-4"><strong>Login</strong></Link></li>
            <li><Link to="/register" className="red-text text-darken-4"><strong>Sign Up</strong></Link></li>
            <li><Link to="/" className="red-text text-darken-4"><strong>Home Page</strong></Link></li>
            {/*<Login/>
            <Register/>*/}
            </div>
        )
   
}


render(){
return (
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

                    <ScoreTable/>
                    
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
    
                
           
        </div>

)
}


}
export default Table;