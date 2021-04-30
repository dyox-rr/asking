const Sequelize = require('sequelize');
const Connection = new Sequelize('questions', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

module.exports = Connection;