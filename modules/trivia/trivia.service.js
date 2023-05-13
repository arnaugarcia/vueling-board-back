const Trivia = require('../../models/Trivia');

class TriviaService {

    constructor() {
    }

    findAll = (req, res) => {
        return Trivia.find()
            .then(games => res.status(200).json(games))
            .catch(error => res.status(500).json({message: 'Error al obtener los Trivia', error}));
    }

    findOne = (req, res) => {
        return Trivia.findById(req.params.id)
            .then(game => res.status(200).json(game))
            .catch(error => res.status(500).json({message: 'Error al obtener el Trivia', error}));
    }

    registerPlayer = (req, res) => {
        Trivia.create([
            {
                "description": "Test your knowledge about famous landmarks in Paris!",
                "image": "paris_landmarks.jpg",
                "players": [],
                "questions": [],
                "timestamp": "2023-05-13T14:56:11.902Z",
                "title": "Paris Landmarks Trivia"
            }
        ])
    }
}

module.exports = TriviaService;

