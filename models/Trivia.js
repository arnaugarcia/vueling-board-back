const mongoose = require('mongoose');

const TriviaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true,
    },
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
    }],
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
    }]
});

const Trivia = mongoose.model('trivia', TriviaSchema);
module.exports = Trivia;
