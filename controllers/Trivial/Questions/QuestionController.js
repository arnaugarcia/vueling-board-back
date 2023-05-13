const Question = require('../../../models/Question');

exports.getQuestions = async (req, res) => {
    try{
        const questions = await Question.find();
        res.status(200).json(questions);

    }catch (error){
        res.status(500).json({message : 'Error al obtener la pregunta', error});
    }
}

exports.getRandomeQuestion = async (req, res) => {
    try{
        const questions = await Question.aggregate([{$sample: {size: 1}}]);
        res.status(200).json(questions[0]);
    }catch (error){
        res.status(500).json({message : 'Error al obtener la pregunta', error});
    }
}