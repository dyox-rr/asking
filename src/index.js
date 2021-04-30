const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes');

/* Configurations */
app.use(express.static('public'));
app.use(routes);
app.set('view engine', 'ejs');



app.listen(PORT, () => console.log('App is running.'));