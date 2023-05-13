
class QuestionService {

    constructor() {
    }

    async getAll(){
        return await global.connection.promise().query("SELECT * FROM Question");
    }

    async getQuestionRandom() {
        const [result] = await global.connection.promise().query("SELECT id,questionText FROM Question");
        console.log(result);
        let randomIndex = Math.floor(Math.random() * result.length);
        return result[randomIndex];
    }

    async getOptionsById(questionId){
        const [result] = await global.connection.promise().query("SELECT OptionTable.optionText FROM OptionTable JOIN Question_Option ON OptionTable.id = Question_Option.optionId WHERE Question_Option.questionId = ?", [questionId]);
        return result;
    }
}

module.exports = QuestionService;
