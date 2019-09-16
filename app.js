const express = require('express');
const expressHandleBars = require('express-handlebars')
const app = express();
var bodyParser = require('body-parser');
const path = require('path');
const routeFormData = require('./api/routes/FetchFormData');

app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', expressHandleBars());
app.set('view engine', 'handlebars');

app.use('/home', routeFormData);
app.use('/contact', routeFormData);

module.exports = app