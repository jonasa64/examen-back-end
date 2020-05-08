const Sequelize = require('sequelize');
const databaseName = 'examen' || process.env.DBNAME;
const databaseUser = 'root' || process.env.DBUSER;
const databasePassword = '' || process.env.DBPASSWORD;
const databaseHost = 'localhost' || process.env.DBHOST;

const sequelize = new Sequelize(databaseName, databaseUser, databasePassword, {
    dialect: 'mysql',
    host: databaseHost
});

module.exports = sequelize;
