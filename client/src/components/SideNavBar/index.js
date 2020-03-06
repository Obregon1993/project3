import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import './style.css';
import M from "materialize-css";
//import image1 from "./assets/7595_-_Questioning_Skills-512.png";
import image1 from "../ParallaxTemp/assets/ruby_quiz.png";
import image2 from "../ParallaxTemp/assets/red_background.png";




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
            <div className="user-view">
                <div className="background">
                <img src={image1} alt="ABC" ></img>
                </div>
                <a href="#user">
                <img className="circle" src={image1} alt="DEF"></img>
                </a>
                <a href="#name">
                <span className="white-text name">John Doe</span>
                </a>
                <a href="#email">
                <span className="white-text email">jdandturk@gmail.com</span>
                </a>
            </div>
            </li>
            <li><h6>Profile</h6></li>
            <li>
                <i className="material-icons">check</i>Total Score:<span>0</span>
            </li>
            <li><h6>Resources</h6></li>
            <li>
            <a href="www.w3school.com" target="_blank">W3School</a>
            </li>
            <li>
            <div className="divider" />
            </li>
            <li>
            <a className="subheader">Subheader</a>
            </li>
            <li>
            <a className="waves-effect" href="#!">
                Third Link With Waves
            </a>
            </li>
        </ul>
        <a href="#!" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
        </a>
        </>
    );
    }
    
}
// const styles = {
//     headingText: {
//     fontSize: 50,
//     fontWeight: 300,
//     }
// };
export default Sidenav;