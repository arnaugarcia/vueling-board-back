const express = require('express');
const PlayerService = require('./player.service');

const router = express.Router();

const playerService = new PlayerService();

router.post('/', async (req, res) => {
        const newPlayer = await playerService.addUser(req.body.name);
        res.status(201).json(newPlayer);
})

module.exports = router;
