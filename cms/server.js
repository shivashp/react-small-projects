'use strict'
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/v1', routes);

// app.use('*', (req, res) => {
//     res.send({"status": "failed", "message": "Invalid Route"});
// })

app.listen(PORT, () => {
    console.log("Listening on port ", PORT);
})