const Customer = require("../models/Customer");

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create and Save a new customer
exports.create = (req, res) => {

    // Create a customer
    const customer = {
        Name: req.body.name,
        Phone: req.body.phone,
        Email: req.body.email,
        Address: req.body.address,
        Username: req.body.username,
        Password: bcrypt.hashSync(req.body.password, 10)
    };

    Customer.findAll({ where: { Email: req.body.email } }).then(user => {
        if (user.length >= 1) {

            res.status(409).send({ message: 'Username is taken' });
        } else {
            return Customer.create(customer);
        }

    }).then(result => {
        const customer = {
            username: result.Username,
            id: result.C_id,
            name: result.Name,
            phone: result.Phone,
            mail: result.Email,
            address: result.Address
        }
        res.send(customer)
    }).catch(err => {

        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the customer."
        });
    });
}

//  give the user a token
exports.login = (req, res) => {
    const username = req.body.username;
    Customer.findAll({ where: { Username: username } })
        .then(user => {
            if (!user.length) {
                return res.status(401).send({ message: "Auth failed" })
            }

            const customer = {
                username: user[0].Username,
                id: user[0].C_id,
                name: user[0].Name,
                phone: user[0].Phone,
                mail: user[0].Email,
                address: user[0].Address
            }
               //password check
            if (bcrypt.compareSync(req.body.password, user[0].Password)) {
                //create auth token
                const token = jwt.sign(customer,
                    process.env.SECRET,
                    {
                        expiresIn: '1h'
                    });
                return res.status(200).send({ message: "Auth successful", token: token, user: customer });
            } else {
                return res.status(401).send({ message: "Auth failed" })
            }
        })
}

// Find a single customer with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Customer.findByPk(id)
        .then(data => {
            const customer = {
                username: data.Username,
                id: data.C_id,
                name: data.Name,
                phone: data.Phone,
                mail: data.Email,
                address: data.Address
            }
            res.send(customer);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving customer with id=" + id
            });
        });

};

// Update a customer by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Customer.update({
        Name: req.body.name,
        Phone: req.body.phone,
        Email: req.body.email,
        Address: req.body.address,
        Username: req.body.username
    }, {
        where: { C_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update customer with id=${id}. Maybe customer was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating customer with id=" + id
            });
        });

};

// Delete a customer with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Customer.destroy({
        where: { C_id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete customer with id=${id}. Maybe customer was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete customer with id=" + id
            });
        });
}
