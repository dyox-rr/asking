const express = require('express');
const session = require('express-session');
const app = express();
const Connection = require('../database/Connection');
const PORT = 3000;
const routes = require('./routes');

/* Configurations */
app.use(session({
    secret: 'dyoxrr',
    cookie: {
        maxAge: 30000
    }
}))
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