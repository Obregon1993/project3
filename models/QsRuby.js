var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var qsrubySchema = new Schema({


  question: String,
  option1: String,
  option2: String,
  option3: String,
  option4: String,
  answer: String
  

});


var QsRuby = mongoose.model("Qs-Ruby", qsrubySchema);

module.exports = QsRuby;