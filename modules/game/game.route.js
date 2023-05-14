const express = require('express');
const router = express.Router();
const GameService = require('./game.service');

const gameService = new GameService();

router.get('/', async (req, res) => {
    res.json(await gameService.getAll().then((data) => data[0]));
    res.status(200);
})

module.exports = router;