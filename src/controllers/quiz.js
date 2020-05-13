const Quiz = require('../models/Quiz');
const Answer = require('../models/Answer');

exports.create = (req, res) => {
    const question = req.body.question;
    const answer = req.body.answer;
    const isCorrect = req.body.isCorrect

    if(question === '' || answer === ''){
        return res.send('Pleas fill out all values');
    }

    Quiz.create({
        Question: question
    }).then(quiz => {
        return Answer.create({
            Answer: answer,
            isCorrect: isCorrect,
            Q_id: quiz.id
        })
    }).then(resulat => res.send(resulat))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the  quiz"
            });
        })
}


exports.findAll = (req, res) => {
    Quiz.findAll({include: [Answer]})
        .then(quizs => res.send(quizs))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Quizs"
            });
        })
}


exports.delete = (req, res) => {
    const id = req.params.id;

    Quiz.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Quiz was deleted successfully!"
            })
        } else {
            res.send({
                message: `Cannot delete Quiz with id=${id}. Maybe Quiz was not found!`
            })
        }
    })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Quiz with id=" + id
            })
        })
}

exports.update = (req, res) => {
   const question = req.body.question;
   const id = req.params.id;
    Quiz.update({
        Question: question
    },{where: {id:id}})
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Quiz was updated successfully!"
                })
            } else {
                res.send({
                    message: `Cannot update Quiz with id=${id}. Maybe Quiz was not found!`
                })
            }
        }).catch(err => {
        res.status(500).send({
            message: "Could not update Quiz with id=" + id
        })
    })
}

exports.findById = (req, res) => {
    const id = req.params.id;

    Quiz.findByPk(id).then(quiz => res.send(quiz))
        .catch(err => {
            res.status(500).send({
                message: "Could not find Quiz with id=" + id
            })
        })
}

