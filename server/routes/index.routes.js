// Libraries
const express = require('express');

// Instance
const app = express();

// Routes
app.use('/user', require('./user.routes'));
app.use('/login', require('./login.routes'));


module.exports = app;