const express = require('express');
const router = express.Router();
const questionController = require('../controllers/Trivial/Questions/QuestionController');

router.get('/questions', questionController.getQuestions);
router.get('/questions/random', questionController.getRandomeQuestion);

module.exports = router;