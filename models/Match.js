const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    beginDate: {
        type: Date,
        required: true,
    }
});

const Match = mongoose.model('Match', matchSchema);
module.exports = Match;