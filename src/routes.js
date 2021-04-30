const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.render('questions/index')
});

routes.get('/question', (req, res) => {
    res.render('questions/create')
});

routes.post('/question/store', (req, res) => {
    let { question, description } = req.body;
    console.log(question, description);
});


module.exports = routes;