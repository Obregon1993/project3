const express = require("express");

const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

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



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/react");


app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
