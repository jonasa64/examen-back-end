const Sequelize = require('sequelize');
const databaseName = 'PUT DB NAME HERE' || process.env.DBNAME;
const databaseUser = 'PUT DB USER NAME HERE' || process.env.DBUSER;
const databasePassword = 'PUT DB PASSWORD HERE' || process.env.DBPASSWORD;
const databaseHost = 'PUT DB HOST HERE' || process.env.DBHOST;

const sequelize = new Sequelize(databaseName, databaseUser, databasePassword, {
    dialect: 'mysql',
    host: databaseHost
});

module.exports = sequelize;