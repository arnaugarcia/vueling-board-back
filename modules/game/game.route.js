const express = require('express');
const router = express.Router();
const GameService = require('./game.service');

const gameService = new GameService();

router.get('/', async (req, res) => {
    let result = await gameService.getAll().then((data) => data[0]);
    res.status(200).json(result);
})

module.exports = router;
