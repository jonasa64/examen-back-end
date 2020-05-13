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
