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
    Question.create({
        question,
        description
    }).then(() => {
        console.log('Question was added.');
        res.redirect('/question');
    }).catch(e => {
        console.error(e);
        res.redirect('/');
    });
});


module.exports = routes;