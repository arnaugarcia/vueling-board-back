const express = require('express');
const TriviaService = require("./trivia.service");
const router = express.Router();

const triviaService = new TriviaService();

router.get('/', triviaService.findAll);
router.post('/:id/players', triviaService.registerPlayer);

module.exports = router;
