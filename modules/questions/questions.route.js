const express = require('express');
const router = express.Router();
const QuestionService = require('./questions.service');

const questionService = new QuestionService();

router.get('/', questionService.getAllQuestions);
router.get('/:id/options', questionService.getOptionsByQuestionId);

module.exports = router;
