const http = require('http');
const path = require('path');

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

const farmer = require('./controller/farmers');
// middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
require('./controller/farmers')(app);

http.createServer(app)
    .listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
    });
