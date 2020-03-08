import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import './style.css';
import M from "materialize-css";
import image1 from "../Images/Questioning_Skills-512.png";
import image2 from "../Images/matrix-code-animation-gif-free-animated-background.gif";




class Sidenav extends Component {

    constructor(props){
        super(props)
        console.log(this.props)
    }

    
    componentDidMount() {

    M.Sidenav.init(this.Sidenav);

    let instance = M.Sidenav.getInstance(this.Sidenav);
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
                <span className="white-text name">{this.props.name}</span>
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
            <a href="https://www.codepen.com" target="_blank" rel="codepen"><i class="fas fa-users"></i>Peer Challenge </a>
            </li>
            <div className="divider" />
            <li>
                <a className="waves-effect" href="../../">
                <i class="fas fa-home"></i>Home</a>
            </li>
            <li>
                <a onClick={this.logOut} className="waves-effect" href="../../">
                <i className="fas fa-sign-out-alt" ></i>Log out</a>
            </li>
            </ul>

            {(this.props.doingQuiz == "true" ) || (this.props.doingQuiz == "result") ?(
                null
            ):(
            <div className="fixed-action-btn">
            <a className="btn-floating btn-large pulse z-depth-3 green accent-4">
            <i className="large material-icons sidenav-trigger " data-target="slide-out">arrow_forward</i>
            </a>
            </div>
            )}
            </>
            
    
        );
        
    } 
}

    export default Sidenav;