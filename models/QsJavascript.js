var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var qsjavascriptSchema = new Schema({


  question: String,
  option1: String,
  option2: String,
  option3: String,
  option4: String,
  answer: String
  

});


var QsJavascript = mongoose.model("Qs-Javascript", qsjavascriptSchema);

module.exports = QsJavascript;