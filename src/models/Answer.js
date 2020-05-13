const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const Answer = sequelize.define('answer', {

    Answer : {
        type: Sequelize.STRING,
        allowNull: false
    },
    isCorrect: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    quizId : {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Answer;
