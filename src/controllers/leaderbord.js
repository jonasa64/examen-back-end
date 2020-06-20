const Quizleaderboard = require('../models/QuizLeaderbord');
const DragDropleaderboard  = require('../models/DragDropLeaderbord');


exports.addDragDrop = (req, res) => {
    const username = req.body.username;
    const time = req.body.time;

    if(username === '' || time === ''){
        return res.send('Pleas fill out all values');
    }

    DragDropleaderboard.create({
        Username: username,
        Time: time
    }).then(dragDrop => {
     res.send(dragDrop);
    }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the  leaderbord"
            });
        })
}

exports.addQuiz = (req, res) => {
    const username = req.body.username;
    const  score = req.body.score;

    if(username === '' || time === ''){
        return res.send('Pleas fill out all values');
    }

    Quizleaderboard.create({
        Username: username,
        Score: score
    }).then(quiz => {
        res.send(quiz);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the  leaderbord"
        });
    })


}


exports.getQuizLeaderbord = (req, res) => {

    Quizleaderboard.findAll()
        .then(quizs => res.send(quizs))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving leaderbord"
            });
        })

}

exports.getDragDropLeaderbord = (req, res) => {

    DragDropleaderboard.findAll()
        .then(dragDrops => res.send(dragDrops))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving leaderbord"
            });
        })
}
