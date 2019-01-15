//Modules
const express = require('express');
const morgan = require('morgan');
//const path = require('path');

const { mongoose } = require('./server/config/database');

// Instances
const app = express();

// Settings
app.set( 'port', process.env.PORT || 3000 );

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api',require('./server/routes/index.routes'));

// Static files
//app.use(express.static(path.join(__dirname,'client','build')));

// Starting server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});