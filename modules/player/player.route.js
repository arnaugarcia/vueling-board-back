const express = require('express');
const PlayerService = require('./player.service');

const router = express.Router();

const playerService = new PlayerService();

router.post('/', async (req, res) => {
    try {console.log(req.body.name);
        const newPlayer = await playerService.addUser(

            name = req.body.name,
        );
        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(404).json({message: 'Error al crear el jugador', error});
    }
})


module.exports = router;