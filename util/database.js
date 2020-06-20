const Sequelize = require('sequelize');
const databaseName =  process.env.DBNAME || 'examen';
const databaseUser =  process.env.DBUSER || 'root';
const databasePassword =  process.env.DBPASSWORD || '';
const databaseHost =  process.env.DBHOST || 'localhost';

const sequelize = new Sequelize(databaseName, databaseUser, databasePassword, {
    dialect: 'mysql',
    host: databaseHost
});

module.exports = sequelize;
