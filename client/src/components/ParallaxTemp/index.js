import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { Link } from "react-router-dom";
import html_quiz from "./assets/html_quiz.png";
// import Carousel from "../Carousel";


const ParallaxTemp = () => (
    <div>
        {/* -----custom background element-----*/}
        <Parallax strength={300}>
            <div style={{ height: '20px' }}></div>
            <Background className="custom-bg">
                <img src="https://hdblackwallpaper.com/wallpaper/2015/07/red-and-black-wallpaper-for-computer-10-free-wallpaper.jpg" alt="fill murray" />
            </Background>
        </Parallax>

        {/* -----basic config-----*/}
        <Parallax
            blur={0}
            bgImage={require('./assets/binary_background.jpg')}
            bgImageAlt="firstImage"
            strength={200}
        >
            <div style={{ height: '80px' }}></div>

        </Parallax>

        {/* -----dynamic blur-----*/}
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('./assets/red_background.png')}
            bgImageAlt="secondImage"
            strength={-200}

        >
            <div style={{ height: '300px', marginTop: "50px" }}>
                <div class="card transparent">

                    <div class="card-content white-text center-align">
                        <h3>So you know you code?</h3>
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
            bgImage={require('./assets/binary_background.jpg')}
            bgImageAlt="firstImage"
            strength={200}
        >
            <div style={{ height: '80px' }}></div>

        </Parallax>

        {/* -----custom background element-----*/}
        <Parallax strength={300}>
        <div style={{ height: '100px' }}></div>
            <Background className="custom-bg">
                <img src="https://hdblackwallpaper.com/wallpaper/2015/07/red-and-black-wallpaper-for-computer-10-free-wallpaper.jpg" alt="fill murray" />
            </Background>
        </Parallax>

        {/* -----dynamic blur-----*/}
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('./assets/red_background.png')}
            bgImageSize={{width:'200px'}}
            bgImageAlt="secondImage"
            strength={-200}
        >

            <div style={{ height: '500px', marginTop: "50px" }} >
                <div class="card transparent">
                    <div class="row">
                        {/* QUIZ CARD 1 */}
                        <div class="card-panel grey darken-2 col m3" style={{ marginLeft: "20px" }}>
                            <div class="card-image">
                            <img src={html_quiz} alt="html_image" style={{ marginTop: "20px" }}></img>
                                <div class="card-content">
                                    <h5>HTML Quiz</h5>
                                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div class="card-action">
                                    <a href="http://www.google.com">This is a link</a>
                                </div>

                            </div>
                        </div>

                        {/* QUIZ CARD 2 */}
                        <div class="card-panel grey darken-2 col m3" style={{ marginLeft: "20px" }}>
                            <div class="card-image">
                            <img src={html_quiz} alt="html_image" style={{ marginTop: "20px" }}></img>
                                <div class="card-content">
                                    <h5>HTML Quiz</h5>
                                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div class="card-action">
                                    <a href="http://www.google.com">This is a link</a>
                                </div>

                            </div>
                        </div>

                        {/* QUIZ CARD 3 */}
                        <div class="card-panel grey darken-2 col m3" style={{ marginLeft: "20px" }}>
                            <div class="card-image">
                                <img src={html_quiz} alt="html_image" style={{ marginTop: "20px" }}></img>
                                <div class="card-content">
                                    <h5>HTML Quiz</h5>
                                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div class="card-action">
                                    <a href="http://www.google.com">This is a link</a>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </Parallax>

        {/* -----custom background element-----*/}
        <Parallax strength={300}>
        <div style={{ height: '20px' }}></div>
            <Background className="custom-bg">
                <img src="https://hdblackwallpaper.com/wallpaper/2015/07/red-and-black-wallpaper-for-computer-10-free-wallpaper.jpg" alt="fill murray" />
            </Background>
        </Parallax>

        {/* <Carousel /> */}

        </div>

);

export default ParallaxTemp;