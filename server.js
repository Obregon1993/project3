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




///////////// Login and Register ///////////////


//Register
app.post("/api/users/add", async (req, res) => {
  db.User.findOne({
    name: req.body.name
  }).then(async function(dbUser) {
    if(!dbUser){
      try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { name: req.body.name, password: hashedPassword }
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


//Check if you are login and send response
app.post("/auth", authenticateToke, (req, res) =>{
  db.User.findOne({
    name: req.user.name
  }).then(function(dbUser){
    res.json(dbUser)
  })
})

function authenticateToke(req, res, next){
  const token = req.body.token
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
