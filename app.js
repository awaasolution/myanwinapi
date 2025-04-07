const express = require('express')
const authRoute = require('./routes/authRoute');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'))

app.use('/api/auth', authRoute)

module.exports = app;