const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const Tshirt = sequelize.define('shirt', {

    Name : {
        type: Sequelize.STRING,
        allowNull: false
    },
    Color: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Price : {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    Description : {
        type: Sequelize.TEXT,
        allowNull: false
    },
    ImageUrl: {
        type: Sequelize.STRING,
        allowNull : false
    },
    Size: {
        type: Sequelize.ENUM,
        values: ['small', 'medium', 'large', 'X-large', 'XX-large'],
        defaultValue: 'large'
    }
});

module.exports = Tshirt;
