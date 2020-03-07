import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import './style.css';
import M from "materialize-css";
import BackgroundImg from "../ParallaxTemp/assets/web-4841858_1280.jpg";






class QuizSection extends Component {
    

    render() {
        return(

<>
    
    <img className="background-img" src={BackgroundImg} alt="DEF"></img>
    </>
        
        );
    }
}

export default QuizSection
