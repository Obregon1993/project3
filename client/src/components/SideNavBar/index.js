import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import './style.css';
import M from "materialize-css";
import image1 from "../ParallaxTemp/assets/Questioning_Skills-512.png";
import image2 from "../ParallaxTemp/assets/matrix-code-animation-gif-free-animated-background.gif";




class Sidenav extends Component {
    componentDidMount() {
    const options = {
        inDuration: 250,
        outDuration: 200,
        draggable: true
    };

    M.Sidenav.init(this.Sidenav);

    let instance = M.Sidenav.getInstance(this.Sidenav);
    instance.open();
    
    
    console.log(instance.isOpen);
    }
    render() {
        return (
        <>
        <ul 
            ref={Sidenav => {
            this.Sidenav = Sidenav;
            }}
            id="slide-out"
            className="sidenav"
        >
            <li>
            <div className="user-view z-depth-4">
                <div className="background">
                <img src={image2} alt="ABC" ></img>
                </div>
                <a href="#user">
                <img className="circle z-depth-1" src={image1} alt="DEF"></img>
                </a>
                <a href="#name">
                <span className="white-text name">Username</span>
                </a>
                <a href="mailto: sykyc@gmail.com">
                <span className="white-text email">sykyc@gmail.com</span>
                </a>
            </div>
            </li>

            <li>
                <h6 className="myProfile"><i class="fas fa-user"></i> Profile</h6>
            </li>
            <li>
                <h6 className="h6">Total Wins:</h6><span id="TotalWins"></span>
            </li>
            <li>
                <h6 className="h6">Total Lost:</h6><span id="TotalLost"></span>
            </li>
            <div className="divider" />
            <li><h6 className="myProfile">Resources</h6></li>
            <li>
            <a href="https://www.w3schools.com" target="_blank" rel="w3school"><i class="fas fa-laptop-code"></i>w3schools</a>
            </li>
            <li>
            <a href="https://www.stackoverflow.com" target="_blank" rel="stockoverflow"><i class="fas fa-file-code"></i>Stock Over Flow</a>
            </li>
            <li>
            <a href="https://www.codeacademy.com" target="_blank" rel="codeacademy"><i class="fas fa-code"></i>Code Academy</a>
            </li>
            <li>
            <a href="https://www.github.com" target="_blank" rel="github"><i class="fab fa-github"></i>Github</a>
            </li>
            <li>
            <div className="divider" />
            </li>
            <li>
            <a href="https://www.codepen.com" target="_blank" rel="codepen"><i class="fas fa-users"></i>Peers Challenge </a>
            </li>
            <div className="divider" />
            <li>
                <a className="waves-effect" href="../../">
                <i class="fas fa-home"></i>Home</a>
            </li>
            <li>
                <a className="waves-effect" href="../../">
                <i className="fas fa-sign-out-alt"></i>Log out</a>
            </li>
            </ul>

            <div className="fixed-action-btn">
            <a className="btn-floating btn-large pulse z-depth-3 green accent-4">
            <i className="large material-icons sidenav-trigger " data-target="slide-out">arrow_forward</i>
            </a>
            </div>
            </>
            
    
        );
        
    } 
}

    export default Sidenav;