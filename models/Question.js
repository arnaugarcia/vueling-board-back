const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
   questionText: String,
   options: [String],
   correctOptionIndex: Number,
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;

