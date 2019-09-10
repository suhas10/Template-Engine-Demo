const express = require('express');

const app = express();
const path = require('path');

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/template', (req, res) => {
    res.render('template')
})

module.exports = app