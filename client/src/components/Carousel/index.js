import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import html_quiz from "../Images/html_quiz.png";

export default () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
        <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={3}
                gutter={20}
                leftChevron={<button>{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                {/* <div style={{ height: 200, background: '#EEE' }}> */}
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
                {/* </div> */}

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

                {/* QUIZ CARD 4 */}
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

                {/* QUIZ CARD 5 */}
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

                {/* QUIZ CARD 6 */}
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

            </ItemsCarousel>
        </div>
    );
};