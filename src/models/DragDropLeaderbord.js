const Sequelize = require('sequelize');
const serialize = require('../../util/database');

const DragDropleaderboard = serialize.define("dragDropleaderboard", {

    Username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Time : {
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = DragDropleaderboard;
