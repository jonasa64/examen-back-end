const Sequelize = require('sequelize');

const  serialize = require('../../util/database');


const  orderDetails = serialize.define('orderDetails', {
    quantity : {
        type : Sequelize.INTEGER,
        allowNull: false
    },
    orderId : {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    shirtId : {
        type : Sequelize.INTEGER,
        allowNull : false
    }
});

module.exports = orderDetails;
