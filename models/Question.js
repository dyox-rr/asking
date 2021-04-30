const Sequelize = require('sequelize');
const Connection = require('../database/Connection');

const Question = Connection.define('questions', {
    question: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Question.sync({ force: false }).then(() => {
    console.log('table created.');
}).catch(e => {
    console.error(e);
});

module.exports = Question;