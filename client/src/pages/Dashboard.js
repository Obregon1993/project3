import React, {Component}from "react";
import {Nav, LogOut, LogName} from "../components/Nav"
import { Link, Redirect } from "react-router-dom";
import API from "../utils/API";
import PageCont from "../components/PageCont";
import Select from 'react-select';
import Sidenav from "../components/SideNavBar"
// import Carousel from "../components/Carousel"




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
        correctXincorrect: "",
        quizzesPass: "",
        quizzesFail: "",

        selectedOption: null,
        peopleFilter: [],

        history: [],

        profile: true,
        quiz: false,
        social: false

    }



    componentDidMount = () => {
        document.body.style.background = "url('https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/89242074_100362221601446_8404418285717684224_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=VJ5X29wlq0AAX-vCE1E&_nc_ht=scontent-mia3-1.xx&oh=42b53918de761852f77508519df5bbc4&oe=5EA38DDE')"
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
                correctXincorrect: res.data.correctXincorrect,
                quizzesPass: res.data.quizzesPass,
                quizzesFail: res.data.quizzesFail
                
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

{/* <Carousel/>  */}
                
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
                            <h5>Stats</h5>
                            <div>
                                <div className="strong">Quizzes taken</div>
                                <div>{this.state.quizTaken}</div>
                            </div>
                            <div>
                                <div className="strong">Total Points</div>
                                <div>{this.state.totalPoints}</div>
                            </div>
                            <div>
                                <div className="strong">Best Time</div>
                                <div>{this.state.bestRecord === "Pass a quiz" ? "Pass a quiz":`${this.state.bestRecord}s`}</div>
                            </div>
                            <div id="cXi">
                                <div className="strong">C/I </div>
                                <div>{this.state.correctXincorrect}</div>
                            </div>
                            <div id="QP">
                                <div className="strong">Quizzes passed</div>
                                <div>{this.state.quizzesPass}</div>
                            </div>
                            <div id="QF">
                                <div className="strong">Quizzes failed</div>
                                <div>{this.state.quizzesFail}</div>
                            </div>
                        </div>
                        <div>
                            <h5>History</h5>
                                {this.state.history == "No history" ? (
                                    <div>No history</div>
                                ):this.state.history.length ? (
                                    this.state.history.map(quiz =>(
                                        
                                    <div key={quiz._id} className="myHistory">
                                        <div class="dateHis">{quiz.date}</div>
                                        <div class="len">
                                            <div className="strong">Language</div>
                                            <div>{quiz.title}</div>
                                        </div>
                                        <div>
                                            <div className="strong">Correct answers</div>
                                            <div>{quiz.correctAnswers}</div>
                                        </div>
                                        <div>
                                            <div className="strong">Incorrect answers</div>
                                            <div>{quiz.incorrectAnswers}</div>
                                        </div>
                                        <div>
                                            <div className="strong">Time</div>
                                            <div>{quiz.time}s</div>
                                        </div>
                                    </div>
                                     
                                    ))
                                ):(
                                    null
                               )}
                        </div>
                        </div>
                        
                        ):this.state.quiz == true ? (
                        <div id="quiz" className="quizWrapper">
                            <h3>Quiz</h3>
                            <div>
                                <img class="lenImg" src="https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg"/>
                                <button onClick={this.selectQuiz} value="javascript">Javascript</button>
                            </div>
                            <div>
                                <img class="lenImg" src="https://nathsir-bucket.s3.amazonaws.com/media/py.png"/>
                                <button onClick={this.selectQuiz} value="python">Python</button>
                            </div>
                            <div>
                                <img class="lenImg" src="https://i.redd.it/31b2ii8hchi31.jpg"/>
                                <button onClick={this.selectQuiz} value="c++">C++</button>
                            </div>
                            <div class="nextLine">
                                <img class="lenImg" src="https://p7.hiclipart.com/preview/405/943/719/5bfc694a2d422.jpg"/>
                                <button onClick={this.selectQuiz} value="ruby">Ruby</button>
                            </div>
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
                                        <div>{person.bestRecord == "70" ? ("No record"):(`${person.bestRecord}s`)}</div>
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
                                    {this.state.displayCorrectAnswer1 ?(
                                    <div>
                                    <p style={{color: "green"}}>{this.state.displayCorrectQuestion1}</p>
                                    <p style={{border: "1px solid #bebebe",padding: "10px",borderRadius: "10px",background: "#f5f5f5",color: "green",fontWeight: "bold"}}>{this.state.displayCorrectAnswer1}</p>
                                    </div>
                                    ):(null)}

                                    {this.state.displayCorrectAnswer2 ?(
                                    <div>
                                    <p style={{color: "green"}}>{this.state.displayCorrectQuestion2}</p>
                                    <p style={{border: "1px solid #bebebe",padding: "10px",borderRadius: "10px",background: "#f5f5f5",color: "green",fontWeight: "bold"}}>{this.state.displayCorrectAnswer2}</p>
                                    </div>
                                    ):(null)}

                                    {this.state.displayCorrectAnswer3 ?(
                                    <div>
                                    <p style={{color: "green"}}>{this.state.displayCorrectQuestion3}</p>
                                    <p style={{border: "1px solid #bebebe",padding: "10px",borderRadius: "10px",background: "#f5f5f5",color: "green",fontWeight: "bold"}}>{this.state.displayCorrectAnswer3}</p>
                                    </div>
                                    ):(null)}

                                    {this.state.displayCorrectAnswer4 ?(
                                    <div>
                                    <p style={{color: "green"}}>{this.state.displayCorrectQuestion4}</p>
                                    <p style={{border: "1px solid #bebebe",padding: "10px",borderRadius: "10px",background: "#f5f5f5",color: "green",fontWeight: "bold"}}>{this.state.displayCorrectAnswer4}</p>
                                    </div>
                                    ):(null)}

                                    {this.state.displayCorrectAnswer5 ?(
                                    <div>
                                    <p style={{color: "green"}}>{this.state.displayCorrectQuestion5}</p>
                                    <p style={{border: "1px solid #bebebe",padding: "10px",borderRadius: "10px",background: "#f5f5f5",color: "green",fontWeight: "bold"}}>{this.state.displayCorrectAnswer5}</p>
                                    </div>
                                    ):(null)}
                                </div>
                                <div className="contForRes">

                                    {this.state.displayIncorrectAnswer1 ?(
                                    <div>
                                    <p style={{color: "red"}}>{this.state.displayIncorrectQuestion1}</p>
                                    <p style={{border: "1px solid #bebebe",padding: "10px",borderRadius: "10px",background: "#f5f5f5",color: "red",fontWeight: "bold"}}>{this.state.displayIncorrectAnswer1}</p>
                                    <p style={{textDecoration: "underline", textDecorationColor: "green"}}>Correct answer: {this.state.displayCorrectData1}</p>
                                    </div>
                                    ):(null)}

                                    {this.state.displayIncorrectAnswer2 ?(
                                    <div>
                                    <p style={{color: "red"}}>{this.state.displayIncorrectQuestion2}</p>
                                    <p style={{border: "1px solid #bebebe",padding: "10px",borderRadius: "10px",background: "#f5f5f5",color: "red",fontWeight: "bold"}}>{this.state.displayIncorrectAnswer2}</p>
                                    <p style={{textDecoration: "underline", textDecorationColor: "green"}}>Correct answer: {this.state.displayCorrectData2}</p>
                                    </div>
                                    ):(null)}

                                    {this.state.displayIncorrectAnswer3 ?(
                                    <div>
                                    <p style={{color: "red"}}>{this.state.displayIncorrectQuestion3}</p>
                                    <p style={{border: "1px solid #bebebe",padding: "10px",borderRadius: "10px",background: "#f5f5f5",color: "red",fontWeight: "bold"}}>{this.state.displayIncorrectAnswer3}</p>
                                    <p style={{textDecoration: "underline", textDecorationColor: "green"}}>Correct answer: {this.state.displayCorrectData3}</p>
                                    </div>
                                    ):(null)}

                                    {this.state.displayIncorrectAnswer4 ?(
                                    <div>
                                    <p style={{color: "red"}}>{this.state.displayIncorrectQuestion4}</p>
                                    <p style={{border: "1px solid #bebebe",padding: "10px",borderRadius: "10px",background: "#f5f5f5",color: "red",fontWeight: "bold"}}>{this.state.displayIncorrectAnswer4}</p>
                                    <p style={{textDecoration: "underline", textDecorationColor: "green"}}>Correct answer: {this.state.displayCorrectData4}</p>
                                    </div>
                                    ):(null)}

                                    {this.state.displayIncorrectAnswer5 ?(
                                    <div>
                                    <p style={{color: "red"}}>{this.state.displayIncorrectQuestion5}</p>
                                    <p style={{border: "1px solid #bebebe",padding: "10px",borderRadius: "10px",background: "#f5f5f5",color: "red",fontWeight: "bold"}}>{this.state.displayIncorrectAnswer5}</p>
                                    <p style={{textDecoration: "underline", textDecorationColor: "green"}}>Correct answer: {this.state.displayCorrectData5}</p>
                                    </div>
                                    ):(null)}
                                </div>
                                <button onClick={this.finishQuiz} id="finishQuiz">Finish</button>
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