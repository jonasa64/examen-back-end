const Tshirt = require('../models/Tshirt');

exports.create = (req, res) => {

    const newShirt = {
        Name: req.body.name,
        Color: req.body.color,
        Price: req.body.price,
        Description: req.body.description,
        ImageUrl: req.body.imageUrl,
        Size: req.body.size
    };

    Tshirt.create(newShirt)
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Tshirt"
        });
    });

}


exports.findAll = (req, res) => {

    Tshirt.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving shirts"
            });
        });
}

exports.findById = (req, res) => {

    const id = req.params.id;
    Tshirt.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error retrieving Tshirt with id= ' + id
            });
        });

}


exports.update = (req, res) => {
    const id = req.params.id;

    const updatedShirt = {
        Name : req.body.name,
        Color : req.body.color,
        Price : req.body.price,
        Description : req.body.description,
        ImageUrl: req.body.ImageUrl,
        Size: req.body.size
    }

    Tshirt.update(updatedShirt, {where: {id: id}}).then(num => {
        if (num == 1) {
            res.send({
                message: "Shirt was updated successfully"
            });
        } else {
            res.send({
                message: `Cannot update Shirt with id=${id}. Maybe Shirt was not found or req.body is empty!`
            })
        }
    }).catch(err => {
        res.send(500).send({
            message: "Error updating Tshirt with id=" + id
        });
    });
}


exports.delete = (req, res) => {

    const id = req.params.id;

    Tshirt.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Tshirt was deleted successfully!"
            })
        } else {
            res.send({
                message: `Cannot delete shirt with id=${id}. Maybe shirt was not found!`
            })
        }
    })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tshirt with id=" + id
            })
        })

}
