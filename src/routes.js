const express = require('express');
const routes = express.Router();
const Question = require('../models/Question');

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