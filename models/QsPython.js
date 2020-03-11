var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var qspythonSchema = new Schema({


  question: String,
  option1: String,
  option2: String,
  option3: String,
  option4: String,
  answer: String
  

});


var QsPython = mongoose.model("Qs-Python", qspythonSchema);

module.exports = QsPython;