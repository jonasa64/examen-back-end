const Sequelize = require('sequelize');

const  serialize = require('../../util/database');

const Order = serialize.define('order', {
    total_price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    order_date: {
        type: Sequelize.DATE,
        defaultValue : Sequelize.NOW
    },
    order_status : {
        type: Sequelize.ENUM,
        values: ['pending', 'rejected', 'confirmed'],
        defaultValue: 'pending'
    },
    shipping_status : {
        type: Sequelize.ENUM,
        values: ['not shipped', 'shipped'],
        defaultValue: 'not shipped'
    },
    customerCId : {
        type : Sequelize.INTEGER,
        allowNull : false,

    }
});

module.exports = Order;
