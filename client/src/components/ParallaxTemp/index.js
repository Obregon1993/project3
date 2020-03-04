import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from "react-router-dom"


const ParallaxTemp = () => (
    <div>
        {/* -----basic config-----*/}
        <Parallax
            blur={0}
            bgImage={require('./binary_background.jpg')}
            bgImageAlt="firstImage"
            strength={200}
        >
            <div style={{ height: '80px' }}>

            </div>

        </Parallax>

        {/* -----dynamic blur-----*/}
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('./red_background.png')}
            bgImageAlt="secondImage"
            strength={-200}
            
        >
            <div style={{ height: '300px', marginTop:"50px" }}>
                <div class="card transparent">

                    <div class="card-content white-text center-align">
                        <h3 class="">So you know you code?</h3>
                        <h5>Sharpen your coding skills with <strong>SYKYC</strong></h5>
                        <h6>Coding quizzes in the industry's leading programming languages.</h6>
                    </div>
                    <div class="card-action center-align">
                        <Link to="/login" className="waves-effect waves-light btn-large red darken-4 white-text"><i class="material-icons right">arrow_forward</i>Get Started</Link>
                    </div>

                </div>
            </div>
        </Parallax>

        <Parallax
            blur={0}
            bgImage={require('./binary_background.jpg')}
            bgImageAlt="firstImage"
            strength={200}
        >
            <div style={{ height: '80px' }}>

            </div>

        </Parallax>

         {/* -----dynamic blur-----*/}
         <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('./red_background.png')}
            bgImageAlt="secondImage"
            strength={-200}
            bgImageSizes="400px"
        >
            <div style={{ height: '400px', marginTop:"50px" }}>
                {/* <div class="card grey darken-3 z-depth-2"> */}

                    <div class="card-content white-text center-align">
                        <h3 class="">So you know you code?</h3>
                        <h5>Sharpen your coding skills with <strong>SYKYC</strong></h5>
                        <h6>Coding quizzes in the industry's leading programming languages.</h6>
                    </div>
                    <div class="card-action center-align">
                        <Link to="/login" className="waves-effect waves-light btn-large red darken-4 white-text"><i class="material-icons right">arrow_forward</i>Get Started</Link>
                    </div>

                {/* </div> */}
            </div>
        </Parallax>


</div>
        
);
export default ParallaxTemp;