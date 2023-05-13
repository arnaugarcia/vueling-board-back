const express = require('express');
const router = express.Router();
const QuestionService = require('./questions.service');

const questionService = new QuestionService();

router.get('/', questionService.getAllQuestions);

module.exports = router;