const express = require('express');
const PlayerService = require('./player.service');
//const Player = require('../../models/Player');
const router = express.Router();

const playerService = new PlayerService();

router.post('/:id', async (req, res) =>{
    const player = new Player({
        name: req.body.name,
    });

    //const newPlayer = await playerService.addUser(player, req.body.id);
    //res.status(201).json(newPlayer);
    res.status(404).json({message: 'Error al crear el jugador'});
});

module.exports = router;