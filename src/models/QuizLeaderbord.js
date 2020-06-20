const Sequelize = require('sequelize');
const serialize = require('../../util/database');

const Quizleaderboard = serialize.define("quizleaderboard", {

    Username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Score : {
        type: Sequelize.INTEGER,
        allowNull: false
    }

});

module.exports = Quizleaderboard;
