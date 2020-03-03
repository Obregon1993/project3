var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var qscplusSchema = new Schema({


  question: String,
  option1: String,
  option2: String,
  option3: String,
  option4: String,
  answer: String
  

});


var QsCplus = mongoose.model("Qs-C++", qscplusSchema);

module.exports = QsCplus;