const express = require('express');
const router = express.Router();
const QuestionService = require('./questions.service');

const questionService = new QuestionService();

router.get ('/', async (req, res, next) =>{

    res.json(await questionService.getQuestionRandom());
    })

router.get('/:id/options', async (req, res)=>{
    const questionId = req.params.id;
    res.json(await questionService.getOptionsById(questionId));
})

module.exports = router;
