const Quiz = require('../models/Quiz');

exports.create = (req, res) => {
    const question = req.body.question;

    if(question === ''){
        return res.send('Pleas enter a question');
    }

    Quiz.create({
        Question: question
    }).then(quiz => res.send(quiz))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the  question"
            });
        })
}


exports.findAll = (req, res) => {
    Quiz.findAll()
        .then(quizs => res.send(quizs))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Quizs"
            });
        })
}
