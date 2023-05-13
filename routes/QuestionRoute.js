const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.get('/questions', questionController.getQuestions);
router.get('/questions/random', questionController.getRandomeQuestion);

module.exports = router;