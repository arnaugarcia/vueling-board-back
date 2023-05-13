const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image:{
        type : String,
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

const Game = mongoose.model('Game', GameSchema);
module.exports = Game;