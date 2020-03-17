import axios from "axios";

export default {
  
    addUser: function(userData) {
        return axios.post("/api/users/add", userData);
    },
    logUser: function(userData) {
        return axios.post("/api/users/login", userData);
    },
    startQuiz: function(Token) {
        return axios.post("/quiz", Token);
    },
    Auth: function(Token) {
        return axios.post("/auth", Token);
    },
    quizSubmit: function(Token) {
        return axios.post("/check/quiz", Token);
    },
    searchFilter: function(filter) {
        return axios.post("/filter", filter);
    },
    showHistory: function(history) {
        return axios.post("/user/history", history);
    },
    topUsers: function(){
        axios.get('/api/table').then((data)=>{
            console.log("this is teh data")
            return data;
        }).catch(()=>{
            console.log('not errors')
        })
      //  return 10
      
    },
    saveQuiz: function(quiz){
        return axios.post('/savequiz', quiz)
    },
    deleteQuiz: function(quiz){
        return axios.post('/deletequiz', quiz)
    }
};