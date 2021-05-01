const express = require('express');
const routes = express.Router();
const Question = require('../models/Question');
const Answer = require('../models/Answer');

routes.get('/', (req, res) => {
    Question.findAll({
        order: [
            ['id', 'desc']
        ]
    }).then(questions => {
        res.render('questions/index', {
            questions
        })
    }).catch(e =>{
        console.error(e);
    });
});

routes.get('/question', (req, res) => {
    let created = req.session.created;
    req.session.created = false;
    res.render('questions/create', {
        created
    })
});

routes.post('/questions/store', (req, res) => {
    let { question, description } = req.body;
    Question.create({
        question,
        description
    }).then(() => {
        console.log('Question was added.');
        req.session.created = true;
        res.redirect('/question');
    }).catch(e => {
        console.error(e);
        res.redirect('/');
    });
});

routes.get('/questions/show/:id', (req, res) => {
    let { id } = req.params;
    Question.findOne({
        raw: true,
        where: {
            id
        }
    }).then(question => {
        Answer.findAll().then(answers => {
            let created = req.session.created;
            req.session.created = false;
            res.render('questions/show', {
                question,
                answers,
                created
            })
        }).catch(e => {
            console.error(e);
        });
    }).catch(e => console.error(e));
});


routes.post('/answer', (req, res) => {
    let { body, question_id } = req.body;
    Answer.create({
        body,
        question_id
    }).then(() => {
        console.log('success');
        req.session.created = true;
        res.redirect(`/questions/show/${question_id}`);
    }).catch(e => {
        console.error(e);
    });
});




module.exports = routes;