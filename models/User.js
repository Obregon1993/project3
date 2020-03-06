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
  }
});


var User = mongoose.model("User", userSchema);

module.exports = User;