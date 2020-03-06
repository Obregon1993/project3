require('dotenv').config()

const express = require("express");
const bcrypt = require("bcrypt")
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")

var db = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactLogs");
mongoose.set('useFindAndModify', false);




///////////// Login and Register ///////////////


//Register
app.post("/api/users/add", async (req, res) => {
  db.User.findOne({
    name: req.body.name
  }).then(async function(dbUser) {
    if(!dbUser){
      try {
        const hashedPassword = await bcrypt.hash(req.body.tete, 10)
        const user = { name: req.body.name, password: hashedPassword, totalQuizzes: 0, totalPoints: 0, bestRecord: 70 }
        db.User.create(user)
        res.status(201).send("Account created successfully")
      } catch {
        res.status(500).send("Something went wrong, try again")
      }
    } else {
      res.send("Name Unavailable")
    }
  }).catch(function(err) {
    res.status(500).send(err)
  });

})

//Login
app.post("/api/users/login", async (req, res) =>{
  db.User.findOne({
    name: req.body.name
  }).then(async function(dbUser){
    if(!dbUser){
      res.send("Name or Password is INCORRECT")
    } else {
      const passwordValid = await bcrypt.compare(req.body.password, dbUser.password)
      if(!passwordValid){
        res.send("Name or Password is INCORRECT")
      } else {
        const username = req.body.name
        const user = {name: username}
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
        res.json({ accessToken: accessToken})

      }
    }
  })
})

let currentQuiz = {
  currentAnswers: [],
  currentQuestions: [],
}

/////////////Quiz/////////////
app.post("/quiz", (req, res) =>{
  if(req.body.quiz === "javascript"){
    db.QsJavascript.aggregate([{ $sample: { size: 5 } }])
    .then(function(dbJavascript){
      currentQuiz.currentAnswers = []
      currentQuiz.currentQuestions = []
      for(let i=0; i<dbJavascript.length; i++){
        currentQuiz.currentAnswers.push(dbJavascript[i].answer)
        currentQuiz.currentQuestions.push(dbJavascript[i].question)
      }
      res.json(dbJavascript)
    })
  } else if(req.body.quiz === "python"){
    db.QsPython.aggregate([{ $sample: { size: 5 } }])
    .then(function(dbPython){
      currentQuiz.currentAnswers = []
      currentQuiz.currentQuestions = []
      for(let i=0; i<dbPython.length; i++){
        currentQuiz.currentAnswers.push(dbPython[i].answer)
        currentQuiz.currentQuestions.push(dbPython[i].question)
      }
      res.json(dbPython)
    })
  } else if(req.body.quiz === "c++"){
    db.QsCplus.aggregate([{ $sample: { size: 5 } }])
    .then(function(dbCplus){
      currentQuiz.currentAnswers = []
      currentQuiz.currentQuestions = []
      for(let i=0; i<dbCplus.length; i++){
        currentQuiz.currentAnswers.push(dbCplus[i].answer)
        currentQuiz.currentQuestions.push(dbCplus[i].question)
      }
      res.json(dbCplus)
    })
  } else if(req.body.quiz === "ruby"){
    db.QsRuby.aggregate([{ $sample: { size: 5 } }])
    .then(function(dbRuby){
      currentQuiz.currentAnswers = []
      currentQuiz.currentQuestions = []
      for(let i=0; i<dbRuby.length; i++){
        currentQuiz.currentAnswers.push(dbRuby[i].answer)
        currentQuiz.currentQuestions.push(dbRuby[i].question)
      }
      res.json(dbRuby)
    })
  }
})

//Check Quiz
app.post("/check/quiz", authenticateToke, (req, res)=>{

  
  let correctQuestions = []
  let incorrectQuestions = []
  let correctAnswers = []
  let incorrectAnswers = []
  let correctAnswersForIncorrect = []
  let Points = 0
  let yourTime = 71
  console.log(req.body[7])
  for(let i=0; i<=4; i++){
    if(req.body[i] === currentQuiz.currentAnswers[i]){
      correctQuestions.push(currentQuiz.currentQuestions[i])
      correctAnswers.push(currentQuiz.currentAnswers[i])
      Points = Points + 15
      if(correctAnswers.length === 4){
        console.log(correctAnswers.length)
        yourTime = 60 - req.body[7]
      }
      
    } else if (req.body[i] !== currentQuiz.currentAnswers[i]){
      incorrectQuestions.push(currentQuiz.currentQuestions[i])
      correctAnswersForIncorrect.push(currentQuiz.currentAnswers[i])
      incorrectAnswers.push(req.body[i])
      Points = Points - 12
    }
  }

  

  db.User.findOneAndUpdate( 
    {name: req.user.name },
    {$inc: { totalQuizzes: 1, totalPoints: Points }}
  
    
  ).then(function(dbUser){
    //console.log(yourTime)
    if(yourTime < dbUser.bestRecord){
      updateTime()
    } else {
      return
    }
  })

  updateTime = () => {
    db.User.findOneAndUpdate( 
      {name: req.user.name },
      {bestRecord: yourTime}
    ).then(function(dbUser){
      console.log(dbUser)
    })
  }
 

  let results = {
    correctQuestions: correctQuestions,
    correctAnswers: correctAnswers,
    incorrectQuestions: incorrectQuestions,
    incorrectAnswers: incorrectAnswers,
    correctAnswersForIncorrect: correctAnswersForIncorrect,
    
  }

  res.send(results)
})

//Social Filter

app.post("/filter", (req, res)=>{
  console.log(req.body)
  if(req.body.filter === "quizzesTaken"){
    db.User.find().sort({
      totalQuizzes: -1
    }).then(function(dbUser){
      res.send(dbUser)
    })
  } else if (req.body.filter === "points"){
    db.User.find().sort({
      totalPoints: -1
    }).then(function(dbUser){
      res.send(dbUser)
    })
  } else if (req.body.filter === "bestTime"){
    db.User.find().sort({
      bestRecord: 1
    }).then(function(dbUser){
      res.send(dbUser)
    })
  }
})





//Check if you are login and send response
app.post("/auth", authenticateToke, (req, res) =>{
  db.User.findOne({
    name: req.user.name
  }).then(function(dbUser){
    res.json(dbUser)
  })
})

function authenticateToke(req, res, next){
  const token = req.body.token || req.body[6]
  if (token == null) return res.send("notLogin")

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(401)
    req.user = user
    next()
  })
}


let javascript = require("./scripts/JavascriptDB")
let Python = require("./scripts/PythonDB")
let cplus = require("./scripts/C++DB")
let Ruby = require("./scripts/RubyDB")

function SaveToMongo(){
  //db.QsJavascript.insertMany(javascript)
  //db.QsPython.insertMany(Python)
  //db.QsCplus.insertMany(cplus)
  //db.QsRuby.insertMany(Ruby)
}




app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  SaveToMongo()
});
