const Player = require('../../models/Player');
const Trivia = require('../../models/Trivia');
class PlayerService {

    constructor() {
    }

    async addUser(player, id){
        if(Trivia.findOne({_id: id})) {
            return Player.create(player);
        }else{
            return null;
        }
    }
}

module.exports = PlayerService;