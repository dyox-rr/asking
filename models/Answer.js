const Sequelize = require('sequelize');
const Connection = require('../database/Connection');

const Answer = Connection.define('answers', {
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    question_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Answer.sync({ force: false }).then(() => {
    console.log('table {answers} created.');
}).catch(e => {
    console.error(e);
});

module.exports = Answer;