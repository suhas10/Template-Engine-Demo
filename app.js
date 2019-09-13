const express = require('express');
const expressHandleBars = require('express-handlebars')
const app = express();
var bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', expressHandleBars());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/contact', (req, res) => {
    let data = {
        name: req.body.name,
        age: req.body.age,
        contact_no: req.body.contact_no,
        address: req.body.address
    }

    console.log(data);
})
module.exports = app