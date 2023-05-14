class PlayerService {

    constructor() {
    }

    async addUser(player) {
        const existingUser = await global.connection.promise().query("SELECT name FROM PlayerTable WHERE name = ?", [player]);
        console.log(existingUser[0].length);
        if (existingUser[0].length > 0) {
            console.log('User already exists');
            return; // or throw an error if desired
        }

        return await global.connection.promise().query("INSERT INTO PlayerTable (name) VALUES (?)", [player]);
    }
}

module.exports = PlayerService;
