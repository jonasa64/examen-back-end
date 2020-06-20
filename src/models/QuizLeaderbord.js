const Sequelize = require('sequelize');
const serialize = require('../../util/database');

const Quizleaderboard = serialize.define("quizleaderboard", {

    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    score : {
        type: Sequelize.INTEGER,
        allowNull: false
    }

});

module.exports = Quizleaderboard;
