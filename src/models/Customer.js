const Sequelize = require('sequelize');
const serialize = require('../../util/database');

const Customer = serialize.define("customer", {

    C_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Phone: {
        type: Sequelize.INTEGER
    },
    Email: {
        type: Sequelize.STRING,
         allowNull: false,
        unique: true
    },
    Address: {
        type: Sequelize.STRING,
         allowNull: false
    },
    Username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Password: {
        type: Sequelize.STRING,
         allowNull: false
    }
});

module.exports = Customer;
