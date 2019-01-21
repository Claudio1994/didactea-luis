//Modules
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./server/config/database');

// Instances
const app = express();

// Settings
app.set( 'port', process.env.PORT || 5000 );

// Middlewares
app.use(morgan('dev'));
//app.use(express.json());

// Routes
app.use('/api',require('./server/routes/index.routes'));

// Static files
app.use('/', express.static(path.join(__dirname+'/client/build')));

// Rutas con react-router que no coincidan con las rutas del backend
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// Starting server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});