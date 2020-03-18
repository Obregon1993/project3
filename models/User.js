var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var userSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
<<<<<<< HEAD
  }
=======
  },
  email: {
    type: String,
    require: true
  },
  totalQuizzes: {
    type: Number,
    require: true
  },
  totalPoints: {
    type: Number,
    require: true
  },
  bestRecord: {
    type: Number,
    require: true
  },
  quizzesPass: {
    type: Number,
    require: true
  },
  quizzesFail: {
    type: Number,
    require: true
  },
  correctXincorrect: {
    type: Number,
    require: true
  },
  quizSave: [String]
>>>>>>> camilo
});


var User = mongoose.model("User", userSchema);

module.exports = User;