import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import './style.css';
import BackgroundImg from "../ParallaxTemp/assets/web-4841858_1280.jpg";
import Carousel from "../Carousel";







class QuizSection extends Component {
    

    render() {
        return(

<>
<div><img className="background-img" src={BackgroundImg} alt="DEF"></img>
<Carousel/>
</div>

    
    </>
        
        );
    }
}

export default QuizSection
