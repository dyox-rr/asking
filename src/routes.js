const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.render('questions/index')
});

routes.get('/question', (req, res) => {
    res.render('questions/create')
});


module.exports = routes;