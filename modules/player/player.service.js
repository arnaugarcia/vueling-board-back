class PlayerService {

    constructor() {
    }

    async addUser(player) {
        return await global.connection.promise().query("INSERT INTO PlayerTable (name) VALUES (?)", [player]);
    }
}

module.exports = PlayerService;
