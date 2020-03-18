var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var historySchema = new Schema({

    user: {
        type: String,
        require: true
    },
  title: {
    type: String,
    required: true
  },
  date: { 
    type: String, 
    require: true
  },
  correctAnswers: {
    type: Number,
    require: true
  },
  incorrectAnswers: {
    type: Number,
    require: true
  },
  time: { type: Number, require: true }
});


var History = mongoose.model("History", historySchema);

module.exports = History;