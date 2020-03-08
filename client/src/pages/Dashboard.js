import React, {Component}from "react";
import {Nav, LogOut, LogName} from "../components/Nav"
import { Link, Redirect } from "react-router-dom";
import API from "../utils/API";
import PageCont from "../components/PageCont";
import Select from 'react-select';
import Sidenav from "../components/SideNavBar"





class Dashboard extends Component {
    state = {
        userName: "",
        tokenValid: null,
        whatQuiz: null,
        goQuiz: "false",

        question1:"",
        answer11: "",
        answer12: "",
        answer13: "",
        answer14: "",

        question2:"",
        answer21: "",
        answer22: "",
        answer23: "",
        answer24: "",

        question3:"",
        answer31: "",
        answer32: "",
        answer33: "",
        answer34: "",

        question4:"",
        answer41: "",
        answer42: "",
        answer43: "",
        answer44: "",

        question5:"",
        answer51: "",
        answer52: "",
        answer53: "",
        answer54: "",

        yourAnswer1: "",
        yourAnswer2: "",    
        yourAnswer3: "",
        yourAnswer4: "",
        yourAnswer5: "",

        displayCorrectQuestion1: "",
        displayCorrectQuestion2: "",
        displayCorrectQuestion3: "",
        displayCorrectQuestion4: "",
        displayCorrectQuestion5: "",

        displayCorrectAnswer1: "",
        displayCorrectAnswer2: "",
        displayCorrectAnswer3: "",
        displayCorrectAnswer4: "",
        displayCorrectAnswer5: "",

        displayIncorrectQuestion1: "",
        displayIncorrectQuestion2: "",
        displayIncorrectQuestion3: "",
        displayIncorrectQuestion4: "",
        displayIncorrectQuestion5: "",

        displayIncorrectAnswer1: "",
        displayIncorrectAnswer2: "",
        displayIncorrectAnswer3: "",
        displayIncorrectAnswer4: "",
        displayIncorrectAnswer5: "",

        displayCorrectData1: "",
        displayCorrectData2: "",
        displayCorrectData3: "",
        displayCorrectData4: "",
        displayCorrectData5: "",


        timeForQuiz: 60,

        quizTaken: "",
        totalPoints: "",
        bestRecord: "",

        selectedOption: null,
        peopleFilter: [],

        history: [],
        historyToggle: false, 

        profile: true,
        quiz: false,
        social: false

    }



    componentDidMount = () => {
        let jwt = localStorage.getItem('token')
      API.Auth({
        token: jwt
      }).then(res => {
          console.log(res.data)
          if(res.data !== "notLogin"){
            this.setState({tokenValid: true})
            this.setState({
                userName: res.data.name,
                quizTaken: res.data.totalQuizzes,
                totalPoints: res.data.totalPoints,
                
            })

            if(res.data.bestRecord === 70){
                this.setState({bestRecord: "Pass a quiz"})
            } else {
                this.setState({bestRecord: res.data.bestRecord})
            }
            
            
            
          } else {
            this.setState({tokenValid: false})
          }
      })
        API.showHistory({
            token: jwt
        }).then(res=>{
            this.setState({history: res.data})
            console.log(this.state.history)
        })
    }

    
    logOut = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }



    //Quiz
    selectQuiz = event => {
        let quiz = event.target.value
        this.setState({goQuiz: "true"})
        this.setState({whatQuiz: quiz}, this.renderQuiz)
    }
    renderQuiz = () => {
        let time = 60
        window.timer = setInterval(function(){
            if(this.state.timeForQuiz > 0){
            time = time - 1
            this.setState({timeForQuiz: time})
            
            } else {
                clearInterval(window.timer)
                this.submitQuiz()
            }
            
        }.bind(this), 1000)
        API.startQuiz({
            quiz: this.state.whatQuiz
        }).then(res =>{
            this.setState({
                question1: res.data[0].question,
                answer11: res.data[0].option1,
                answer12: res.data[0].option2,
                answer13: res.data[0].option3,
                answer14: res.data[0].option4,

                question2: res.data[1].question,
                answer21: res.data[1].option1,
                answer22: res.data[1].option2,
                answer23: res.data[1].option3,
                answer24: res.data[1].option4,

                question3: res.data[2].question,
                answer31: res.data[2].option1,
                answer32: res.data[2].option2,
                answer33: res.data[2].option3,
                answer34: res.data[2].option4,

                question4: res.data[3].question,
                answer41: res.data[3].option1,
                answer42: res.data[3].option2,
                answer43: res.data[3].option3,
                answer44: res.data[3].option4,

                question5: res.data[4].question,
                answer51: res.data[4].option1,
                answer52: res.data[4].option2,
                answer53: res.data[4].option3,
                answer54: res.data[4].option4,
            })
            console.log(this.state.questions)
        })
    }
    submitQuiz = () => {
        clearInterval(window.timer)
        let jwt = localStorage.getItem('token')
        API.quizSubmit([
            this.state.yourAnswer1 || "incorrect",
            this.state.yourAnswer2 || "incorrect",
            this.state.yourAnswer3 || "incorrect",
            this.state.yourAnswer4 || "incorrect",
            this.state.yourAnswer5 || "incorrect",
            this.state.whatQuiz,
            jwt,
            this.state.timeForQuiz,
            
        ]).then(res => {
            console.log(res.data)
            this.setState({
                displayCorrectQuestion1: res.data.correctQuestions[0],
                displayCorrectQuestion2: res.data.correctQuestions[1],
                displayCorrectQuestion3: res.data.correctQuestions[2],
                displayCorrectQuestion4: res.data.correctQuestions[3],
                displayCorrectQuestion5: res.data.correctQuestions[4],

                displayCorrectAnswer1: res.data.correctAnswers[0],
                displayCorrectAnswer2: res.data.correctAnswers[1],
                displayCorrectAnswer3: res.data.correctAnswers[2],
                displayCorrectAnswer4: res.data.correctAnswers[3],
                displayCorrectAnswer5: res.data.correctAnswers[4],

                displayIncorrectQuestion1: res.data.incorrectQuestions[0],
                displayIncorrectQuestion2: res.data.incorrectQuestions[1],
                displayIncorrectQuestion3: res.data.incorrectQuestions[2],
                displayIncorrectQuestion4: res.data.incorrectQuestions[3],
                displayIncorrectQuestion5: res.data.incorrectQuestions[4],

                displayIncorrectAnswer1: res.data.incorrectAnswers[0],
                displayIncorrectAnswer2: res.data.incorrectAnswers[1],
                displayIncorrectAnswer3: res.data.incorrectAnswers[2],
                displayIncorrectAnswer4: res.data.incorrectAnswers[3],
                displayIncorrectAnswer5: res.data.incorrectAnswers[4],

                displayCorrectData1: res.data.correctAnswersForIncorrect[0],
                displayCorrectData2: res.data.correctAnswersForIncorrect[1],
                displayCorrectData3: res.data.correctAnswersForIncorrect[2],
                displayCorrectData4: res.data.correctAnswersForIncorrect[3],
                displayCorrectData5: res.data.correctAnswersForIncorrect[4],


            })
        })
        this.setState({goQuiz: "result"})
    }
    checkAnswer = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }
    finishQuiz = () => {
        window.location.reload()
    }
    ////////////////////////////////////////////

    handleOptionChange = selectedOption => {
        this.setState({ selectedOption });
        this.searchFilter(selectedOption.value)
      };
    searchFilter = value => {
        API.searchFilter({
            filter: value
        }).then(res => {
            this.setState({peopleFilter: res.data})
            console.log(this.state.peopleFilter)
        })
    }

    toggleHistoty = () => {
        if(this.state.historyToggle === false){
            this.setState({historyToggle: true})
        } else if(this.state.historyToggle === true){
            this.setState({historyToggle: false})
        } 
    }

    runAlert = value => {
        if(value === "profile"){
            this.setState({quiz: false,social: false})
            this.setState({profile: true})
        } else if (value === "quiz"){
            this.setState({profile: false, social: false})
            this.setState({quiz: true})
        } else if (value === "social"){
            this.setState({profile: false, quiz: false})
            this.setState({social: true})
        }
    }
    

    render(){
        if(this.state.tokenValid === false){
            return <Redirect to='/'/>
        } else if (this.state.tokenValid === true){
        return(
            <div>
                <Sidenav
                name={this.state.userName}
                quizzesTaken={this.state.quizTaken}
                totalPoints={this.state.totalPoints}
                bestTime={this.state.bestRecord}
                onClick={this.runAlert}
                doingQuiz={this.state.goQuiz}
                />
                
                {/*<Nav>
                    <div>SYKYC</div>
                    <div className="dashNav">
                        <a  href="#social">Social</a>
                        <a href="#quiz">Quiz</a>
                        <a href="#profile">Profile</a>
                    </div>

                    <div className="logs">
                        <LogName>{this.state.userName}</LogName>
                        <LogOut onClick={this.logOut}/>
                    </div>

                </Nav>*/}
                
                
                    {this.state.goQuiz === "true" ? (
                    <PageCont>
                        <div className="doingQuiz">
                            <div className = "titleQuiz">
                                <h1>{this.state.whatQuiz}</h1>
                                <h5>time: {this.state.timeForQuiz}</h5>
                            </div>
                            <div className="question">
                                <p>1. {this.state.question1}</p>
                                <button value={this.state.answer11} onClick={this.checkAnswer} name="yourAnswer1">{this.state.answer11}</button>
                                <button value={this.state.answer12} onClick={this.checkAnswer} name="yourAnswer1">{this.state.answer12}</button>
                                <button value={this.state.answer13} onClick={this.checkAnswer} name="yourAnswer1">{this.state.answer13}</button>
                                <button value={this.state.answer14} onClick={this.checkAnswer} name="yourAnswer1">{this.state.answer14}</button>
                            </div>
                            <div className="question">
                                <p>2. {this.state.question2}</p>
                                <button value={this.state.answer21} onClick={this.checkAnswer} name="yourAnswer2">{this.state.answer21}</button>
                                <button value={this.state.answer22} onClick={this.checkAnswer} name="yourAnswer2">{this.state.answer22}</button>
                                <button value={this.state.answer23} onClick={this.checkAnswer} name="yourAnswer2">{this.state.answer23}</button>
                                <button value={this.state.answer24} onClick={this.checkAnswer} name="yourAnswer2">{this.state.answer24}</button>
                            </div>
                            <div className="question">
                                <p>3. {this.state.question3}</p>
                                <button value={this.state.answer31} onClick={this.checkAnswer} name="yourAnswer3">{this.state.answer31}</button>
                                <button value={this.state.answer32} onClick={this.checkAnswer} name="yourAnswer3">{this.state.answer32}</button>
                                <button value={this.state.answer33} onClick={this.checkAnswer} name="yourAnswer3">{this.state.answer33}</button>
                                <button value={this.state.answer34} onClick={this.checkAnswer} name="yourAnswer3">{this.state.answer34}</button>
                            </div>
                            <div className="question">
                                <p>4. {this.state.question4}</p>
                                <button value={this.state.answer41} onClick={this.checkAnswer} name="yourAnswer4">{this.state.answer41}</button>
                                <button value={this.state.answer42} onClick={this.checkAnswer} name="yourAnswer4">{this.state.answer42}</button>
                                <button value={this.state.answer43} onClick={this.checkAnswer} name="yourAnswer4">{this.state.answer43}</button>
                                <button value={this.state.answer44} onClick={this.checkAnswer} name="yourAnswer4">{this.state.answer44}</button>
                            </div>
                            <div className="question">
                                <p>5. {this.state.question5}</p>
                                <button value={this.state.answer51} onClick={this.checkAnswer} name="yourAnswer5">{this.state.answer51}</button>
                                <button value={this.state.answer52} onClick={this.checkAnswer} name="yourAnswer5">{this.state.answer52}</button>
                                <button value={this.state.answer53} onClick={this.checkAnswer} name="yourAnswer5">{this.state.answer53}</button>
                                <button value={this.state.answer54} onClick={this.checkAnswer} name="yourAnswer5">{this.state.answer54}</button>
                            </div>
                            <button onClick={this.submitQuiz}>Submit</button>
                        </div>

                    </PageCont>
                    ):(this.state.goQuiz === "false" ? (

                    <PageCont>
                        {this.state.profile == true ?(
                        <div>
                        <div id="profile" className="profileWrapper">
                            <h3>Profile</h3>
                            <div>
                                <div>Quizzes taken</div>
                                <div>{this.state.quizTaken}</div>
                            </div>
                            <div>
                                <div>Total Points</div>
                                <div>{this.state.totalPoints}</div>
                            </div>
                            <div>
                                <div>Best Time</div>
                                <div>{this.state.bestRecord}s</div>
                            </div>
                            <button onClick={this.toggleHistoty}>{this.state.historyToggle ? ("⇧"):("⇩")}</button>
                        </div>
                        <div>
                            {this.state.historyToggle == false ? (
                               null
                            ):this.state.historyToggle == true ? (
                                this.state.history == "No history" ? (
                                    <div>No history</div>
                                ):this.state.history.length ? (
                                    this.state.history.map(quiz =>(
                                    <div key={quiz._id} className="myHistory">
                                        <div>
                                            <div>{quiz.date}</div>
                                            <div>{quiz.title}</div>
                                        </div>
                                        <div>
                                            <div>Correct answers</div>
                                            <div>{quiz.correctAnswers}</div>
                                        </div>
                                        <div>
                                            <div>Incorrect answers</div>
                                            <div>{quiz.incorrectAnswers}</div>
                                        </div>
                                        <div>
                                            <div>Time</div>
                                            <div>{quiz.time}s</div>
                                        </div>
                                    </div>
                                    
                                    ))
                                ):(
                                    null
                                )
                            ):(
                                null
                            )}
                        </div>
                        </div>
                        
                        ):this.state.quiz == true ? (
                        <div id="quiz" className="quizWrapper">
                            <h3>Quiz</h3>
                            <button onClick={this.selectQuiz} value="javascript">Javascript</button>
                            <button onClick={this.selectQuiz} value="python">Python</button>
                            <button onClick={this.selectQuiz} value="c++">C++</button>
                            <button onClick={this.selectQuiz} value="ruby">Ruby</button>
                        </div>
                        ):this.state.social == true ? (
                        <div id="social" className="socialWrapper">
                            <h3>LeaderBoard</h3>
                            <Select id="selectFilter"
                               options={[
                                { value: 'quizzesTaken', label: 'Quizzes taken' },
                                { value: 'points', label: 'Points' },
                                { value: 'bestTime', label: 'bestTime' },
                                ]}
                               isSearchable={false}
                               placeholder="filter by"
                               value={this.state.selectedOption}
                                onChange={this.handleOptionChange}
                            />
                            {this.state.peopleFilter.length ? (
                            <div>
                            {this.state.peopleFilter.map(person => (
                                <div key={person._id} className="personFilter">
                                    <div className="personFiltername">{person.name}</div>
                                    <div className="titlesFilter">
                                        <div>Quizzes taken</div>
                                        <div>{person.totalQuizzes}</div>
                                    </div>
                                    <div className="titlesFilter">
                                        <div>Total Points</div>
                                        <div>{person.totalPoints}</div>
                                    </div>
                                    <div className="titlesFilter">
                                        <div>Best Time</div>
                                        <div>{person.bestRecord == "70" ? ("No record"):(person.bestRecord)}</div>
                                    </div>
                                </div>
                            ))}
                            </div>
                            ):(
                                <div id="filterMessage">Select a filter</div>
                            )}
                        </div>
                        ):(
                            null
                        )}
                    </PageCont>
                    ): (
                        <PageCont>
                            <div className="resultsCont">
                                <div className="contForRes">
                                    <p style={{color: "green"}}>{this.state.displayCorrectQuestion1}</p>
                                    <p style={{textDecoration: "underline", textDecorationColor: "green"}}>{this.state.displayCorrectAnswer1}</p>
                                    
                                    <p style={{color: "green"}}>{this.state.displayCorrectQuestion2}</p>
                                    <p style={{textDecoration: "underline", textDecorationColor: "green"}}>{this.state.displayCorrectAnswer2}</p>
                                    
                                    <p style={{color: "green"}}>{this.state.displayCorrectQuestion3}</p>
                                    <p style={{textDecoration: "underline", textDecorationColor: "green"}}>{this.state.displayCorrectAnswer3}</p>
                                    
                                    <p style={{color: "green"}}>{this.state.displayCorrectQuestion4}</p>
                                    <p style={{textDecoration: "underline", textDecorationColor: "green"}}>{this.state.displayCorrectAnswer4}</p>
                                    
                                    <p style={{color: "green"}}>{this.state.displayCorrectQuestion5}</p>
                                    <p style={{textDecoration: "underline", textDecorationColor: "green"}}>{this.state.displayCorrectAnswer5}</p>
                                </div>
                                <div className="contForRes">
                                    <p style={{color: "red"}}>{this.state.displayIncorrectQuestion1}</p>
                                    <p style={{textDecoration: "underline", textDecorationColor: "red"}}>{this.state.displayIncorrectAnswer1}</p>
                                    <p style={{textDecoration: "underline", textDecorationColor: "green"}}>{this.state.displayCorrectData1}</p>
                                    
                                    <p style={{color: "red"}}>{this.state.displayIncorrectQuestion2}</p>
                                    <p style={{textDecoration: "underline", textDecorationColor: "red"}}>{this.state.displayIncorrectAnswer2}</p>
                                    <p style={{textDecoration: "underline", textDecorationColor: "green"}}>{this.state.displayCorrectData2}</p>
                                    
                                    <p style={{color: "red"}}>{this.state.displayIncorrectQuestion3}</p>
                                    <p style={{textDecoration: "underline", textDecorationColor: "red"}}>{this.state.displayIncorrectAnswer3}</p>
                                    <p style={{textDecoration: "underline", textDecorationColor: "green"}}>{this.state.displayCorrectData3}</p>
                                    
                                    <p style={{color: "red"}}>{this.state.displayIncorrectQuestion4}</p>
                                    <p style={{textDecoration: "underline", textDecorationColor: "red"}}>{this.state.displayIncorrectAnswer4}</p>
                                    <p style={{textDecoration: "underline", textDecorationColor: "green"}}>{this.state.displayCorrectData4}</p>
                                    
                                    <p style={{color: "red"}}>{this.state.displayIncorrectQuestion5}</p>
                                    <p style={{textDecoration: "underline", textDecorationColor: "red"}}>{this.state.displayIncorrectAnswer5}</p>
                                    <p style={{textDecoration: "underline", textDecorationColor: "green"}}>{this.state.displayCorrectData5}</p>
                                </div>
                                <button onClick={this.finishQuiz}>Finish</button>
                            </div>
                        </PageCont>
                    ))}
                
            </div>
            
        )
        }  else {
            return null
        }


        
    }

}

export default Dashboard;