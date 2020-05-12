const Sequelize = require('sequelize');
const serialize = require('../../util/database');

const DragDrop = serialize.define("dragDrop", {

    question: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type : {
        type: Sequelize.ENUM,
        values: ['solution', 'consequence'],
        defaultValue: 'solution'
    }

});

module.exports = DragDrop;
