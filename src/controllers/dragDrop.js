const DragDrop = require('../models/DragDrop');


exports.findAll = (req, res) => {
    DragDrop.findAll()
        .then(drag => res.send(drag))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving drag and drops"
            });
        });
}


exports.create = (req, res) => {

    DragDrop.create({
        question: req.body.question,
        type: req.body.type
    }).then(drag => res.send(drag)).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the drag and drop"
        });
    })
}

