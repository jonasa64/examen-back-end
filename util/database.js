const Sequelize = require('sequelize');
const databaseName =  process.env.DBNAME;
const databaseUser =  process.env.DBUSER;
const databasePassword =  process.env.DBPASSWORD;
const databaseHost =  process.env.DBHOST;

const sequelize = new Sequelize(databaseName, databaseUser, databasePassword, {
    dialect: 'mysql',
    host: databaseHost
});

module.exports = sequelize;
