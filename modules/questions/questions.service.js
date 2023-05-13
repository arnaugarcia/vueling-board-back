const Question = require('../../models/Question');

class QuestionService {

    constructor() {
    }

   getAllQuestions = (req,res) => {
     return Question.find()
         .then(questions => res.status(200).json(questions))
         .catch(error => res.status(500).json({message: 'Error al obtener las preguntas', error}));
   }
}

module.exports = QuestionService;