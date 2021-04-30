const express = require('express');
const app = express();
const Connection = require('../database/Connection');
const PORT = 3000;
const routes = require('./routes');

/* Configurations */
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));
app.use(routes);
app.set('view engine', 'ejs');


/* Database connection */
Connection
.authenticate()
.then(() => {
    console.log('database connected;');
}).catch(e => {
    console.error(e);
});



app.listen(PORT, () => console.log('App is running.'));