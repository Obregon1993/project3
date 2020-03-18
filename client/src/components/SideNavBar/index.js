import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import './style.css';
import M from "materialize-css";
<<<<<<< HEAD
import image1 from "../ParallaxTemp/assets/Questioning_Skills-512.png";
import image2 from "../ParallaxTemp/assets/matrix-code-animation-gif-free-animated-background.gif";
import Newlogo from "../ParallaxTemp/assets/Green_SYKYC-Logo.png";
import { Link } from "react-router-dom";


=======
import image1 from "../Images/Questioning_Skills-512.png";
import image2 from "../Images/matrix-code-animation-gif-free-animated-background.gif";
>>>>>>> camilo




<<<<<<< HEAD


class Sidenav extends Component {
    componentDidMount() {
    const options = {
        inDuration: 250,
        outDuration: 200,
        draggable: true
    };
=======
class Sidenav extends Component {

    constructor(props){
        super(props)
        console.log(this.props)
    }

    
    componentDidMount() {
>>>>>>> camilo

    M.Sidenav.init(this.Sidenav);

    let instance = M.Sidenav.getInstance(this.Sidenav);
<<<<<<< HEAD
    instance.open();
    
    
    console.log(instance.isOpen);
    }
    render() {
        return (
        <>
        
=======
    instance.close();
    //console.log(instance.isOpen);
    
    }

    logOut = () => {
        
        localStorage.removeItem("token")
    }

    runFunction = () => {
        let instance = M.Sidenav.getInstance(this.Sidenav);
        instance.close()
    }
    
    render() {
        return (
        <>
>>>>>>> camilo
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
<<<<<<< HEAD
                <span className="white-text name">Username</span>
                </a>
                <a href="mailto: example@gmail.com">
                <span className="white-text email">example@gmail.com</span>
                </a>
            </div>
            </li>
            <div style={{ }}>
                            <Link to="/"><img src={Newlogo} alt="logo" height="60" width="140" className="brand-logo"></img></Link>
                        </div>
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
            <a href="https://www.w3schools.com" target="_blank" rel="w3school"><i class="fas fa-laptop-code"></i>W3Schools</a>
            </li>
            <li>
            <a href="https://www.stackoverflow.com" target="_blank" rel="stockoverflow"><i class="fas fa-file-code"></i>Stack Overflow</a>
=======
                <span className="white-text name" id="username">{this.props.name}</span>
                </a>
            </div>
            </li>

            <li>
                <h6 className="myProfile"><i className="fas fa-user"></i> Profile</h6>
            </li>
            <li>
                <h6 className="h6">Quizzes Taken: {this.props.quizzesTaken}</h6><span id="TotalQuizzes"></span>
            </li>
            <li>
                <h6 className="h6">Points: {this.props.totalPoints}</h6><span id="TotalPoints"></span>
            </li>
            <li>
                <h6 className="h6">Best Time: {this.props.bestTime}s</h6><span id="BestTime"></span>
            </li>
            <div className="divider" />
            <li>
                <a href="#" onClick={() => {this.props.onClick("profile"); this.runFunction();}} data-target="slide-out"><i class="fas fa-user-alt" ></i>Profile</a>
            </li>
            <li>
                <a href="#" onClick={() => {this.props.onClick("quiz"); this.runFunction();}} data-target="slide-out"><i class="fas fa-bug" ></i>Take Quiz</a>
            </li>
            <li>
                <a href="#" onClick={() => {this.props.onClick("social"); this.runFunction();}} data-target="slide-out"><i class="fas fa-trophy" ></i>Leaderboard</a>
            </li>
            <li><h6 className="myProfile">Resources</h6></li>
            <li>
            <a href="https://www.w3school.com/" target="_blank" rel="w3school"><i class="fas fa-laptop-code"></i>W3School</a>
            </li>
            <li>
            <a href="https://www.stackoverflow.com" target="_blank" rel="stockoverflow"><i class="fas fa-file-code"></i>Stack Over Flow</a>
>>>>>>> camilo
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
<<<<<<< HEAD
            <a href="https://www.codepen.com" target="_blank" rel="codepen"><i class="fas fa-users"></i>Peers Challenge </a>
=======
            <a href="https://www.codepen.com" target="_blank" rel="codepen"><i class="fas fa-users"></i>Peer Challenge </a>
>>>>>>> camilo
            </li>
            <div className="divider" />
            <li>
                <a className="waves-effect" href="../../">
                <i class="fas fa-home"></i>Home</a>
            </li>
            <li>
<<<<<<< HEAD
                <a className="waves-effect" href="../../">
                <i className="fas fa-sign-out-alt"></i>Log out</a>
            </li>
            </ul>

=======
                <a onClick={this.logOut} className="waves-effect" href="../../">
                <i className="fas fa-sign-out-alt" ></i>Log out</a>
            </li>
            </ul>

            {(this.props.doingQuiz == "true" ) || (this.props.doingQuiz == "result") ?(
                null
            ):(
>>>>>>> camilo
            <div className="fixed-action-btn">
            <a className="btn-floating btn-large pulse z-depth-3 green accent-4">
            <i className="large material-icons sidenav-trigger " data-target="slide-out">arrow_forward</i>
            </a>
            </div>
<<<<<<< HEAD
=======
            )}
>>>>>>> camilo
            </>
            
    
        );
        
    } 
}

    export default Sidenav;