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


exports.update = (req, res) => {
    const id = req.params.id;

    DragDrop.update({
        question: req.body.question,
        type: req.body.type
    }, {where:{id: id}})
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Drag and Drop was updated successfully"
                });
            } else {
                res.send({
                    message: `Cannot update Drag and Drop with id=${id}. Maybe Drag and Drop was not found or req.body is empty!`
                })
            }
        }).catch(err => {
        res.send(500).send({
            message: "Error updating Drag and Drop with id=" + id
        });
    })
}
