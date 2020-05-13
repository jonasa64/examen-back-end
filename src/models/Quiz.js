const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const Quiz = sequelize.define('quiz', {

    Question : {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Quiz;
