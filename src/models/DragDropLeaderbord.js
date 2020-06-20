const Sequelize = require('sequelize');
const serialize = require('../../util/database');

const DragDropleaderboard = serialize.define("dragDropleaderboard", {

    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    time : {
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = DragDropleaderboard;
