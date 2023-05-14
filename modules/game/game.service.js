class GameService {
    constructor() {
    }

    async getAll(){
        return await global.connection.promise().query("SELECT * FROM Games");
    }



}

module.exports = GameService;