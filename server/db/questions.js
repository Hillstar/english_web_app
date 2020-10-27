const Joi = require('joi');
const db = require('./connection');
 
const schema = Joi.object().keys({
        questionText: Joi.string().max(100).required(),
        choices: Joi.array().items(
            Joi.object({
                id: Joi.number().required(), 
                text: Joi.string().max(100).required()
            })
        ),
        answer: Joi.number().required()
});
 
const questions = db.get('questions');
 
function getAll() {
    return questions.find();
}
 
function create(question) {
    const result = schema.validate(question);
    if (result.error == null) {
        question.created = new Date();
        return questions.insert(question);
    } else {
        return Promise.reject(result.error);
    }
}
 
module.exports = {
    create,
    getAll
};