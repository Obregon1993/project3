import React, {Component}from "react";
import {Nav, LogOut, LogName} from "../components/Nav"
import { Link, Redirect } from "react-router-dom";
import API from "../utils/API";
import PageCont from "../components/PageCont";

class Dashboard extends Component {
    state = {
        userName: "",
        quizTaken: "",
        tokenValid: null,
        whatQuiz: null,

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
        }

    componentDidMount = () => {
        let jwt = localStorage.getItem('token')
      API.Auth({
        token: jwt
      }).then(res => {
          if(res.data !== "notLogin"){
            this.setState({tokenValid: true})
            this.setState({userName: res.data.name})
            this.setState({quizTaken: res.data.totalQuizzes})

            console.log(res.data)
          } else {
            this.setState({tokenValid: false})
          }
      })
    }

    logOut = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }

    selectQuiz = event => {
        let quiz = event.target.value
        this.setState({goQuiz: true})
        this.setState({whatQuiz: quiz}, this.renderQuiz)
    
       
    }
    renderQuiz = () => {
        API.startQuiz({
            quiz: this.state.whatQuiz
        }).then(res =>{
            console.log(res.data)
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
        })
    }

    
    

    render(){
        if(this.state.tokenValid === false){
            return <Redirect to='/'/>
        } else if (this.state.tokenValid === true){
        return(
            <div>
                <Nav>
                    <div>SYKYC</div>
                    <div className="dashNav">
                        <button onClick={this.grabvalue} >Social</button>
                        <button onClick={this.renderSelect} >Quiz</button>
                        <button onClick={this.renderSelect}>Profile</button>
                    </div>

                    <div className="logs">
                        <LogName>{this.state.userName}</LogName>
                        <LogOut onClick={this.logOut}/>
                    </div>

                </Nav>
                
                
                    {this.state.goQuiz ? (
                    <PageCont>
                        <div className="doingQuiz">
                            <h1>Javascript</h1>
                            <div className="question">
                                <p>1. {this.state.question1}</p>
                                <button value={this.state.answer11}>{this.state.answer11}</button>
                                <button value={this.state.answer12}>{this.state.answer12}</button>
                                <button value={this.state.answer13}>{this.state.answer13}</button>
                                <button value={this.state.answer14}>{this.state.answer14}</button>
                            </div>
                            <div className="question">
                                <p>2. {this.state.question2}</p>
                                <button value={this.state.answer21}>{this.state.answer21}</button>
                                <button value={this.state.answer22}>{this.state.answer22}</button>
                                <button value={this.state.answer23}>{this.state.answer23}</button>
                                <button value={this.state.answer24}>{this.state.answer24}</button>
                            </div>
                            <div className="question">
                                <p>3. {this.state.question3}</p>
                                <button value={this.state.answer31}>{this.state.answer31}</button>
                                <button value={this.state.answer32}>{this.state.answer32}</button>
                                <button value={this.state.answer33}>{this.state.answer33}</button>
                                <button value={this.state.answer34}>{this.state.answer34}</button>
                            </div>
                            <div className="question">
                                <p>4. {this.state.question4}</p>
                                <button value={this.state.answer41}>{this.state.answer41}</button>
                                <button value={this.state.answer42}>{this.state.answer42}</button>
                                <button value={this.state.answer43}>{this.state.answer43}</button>
                                <button value={this.state.answer44}>{this.state.answer44}</button>
                            </div>
                            <div className="question">
                                <p>5. {this.state.question5}</p>
                                <button value={this.state.answer51}>{this.state.answer51}</button>
                                <button value={this.state.answer52}>{this.state.answer52}</button>
                                <button value={this.state.answer53}>{this.state.answer53}</button>
                                <button value={this.state.answer54}>{this.state.answer54}</button>
                            </div>
                            <button onclick={this.submitQuiz}>Submit</button>
                        </div>

                    </PageCont>
                    ):(

                    <PageCont>
                        <div className="profileWrapper">
                            <h3>Profile</h3>
                            <div>
                                <div>Quizzes taken</div>
                                <div>{this.state.quizTaken}</div>
                            </div>
                        </div>
                        <div className="quizWrapper">
                            <h3>Quiz</h3>
                            <button onClick={this.selectQuiz} value="javascript">Javascript</button>
                            <button onClick={this.selectQuiz} value="python">Python</button>
                            <button onClick={this.selectQuiz} value="c++">C++</button>
                            <button onClick={this.selectQuiz} value="ruby">Ruby</button>
                        </div>
                    </PageCont>
                    )}
                
            </div>
            
        )
        }  else {
            return null
        }


        
    }

}

export default Dashboard;