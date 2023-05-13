const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
   questionText: {
      type: String,
      required: true,
   },
    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Option',
    }],
   correctOptionIndex: {
        type: Number,
        required: true,
   },
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;

