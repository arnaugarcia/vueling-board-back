const Game = require('../../models/Game');

exports.getGames = (req, res) => {
    return Game.find()
        .then(games => res.status(200).json(games))
        .catch(error => res.status(500).json({message: 'Error al obtener los juegos', error}));
}

exports.getGame = (req, res) => {
    return Game.findById(req.params.id)
        .then(game => res.status(200).json(game))
        .catch(error => res.status(500).json({message: 'Error al obtener el juego', error}));
}


