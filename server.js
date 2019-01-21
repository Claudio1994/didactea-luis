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

// Static files
app.use('/public', express.static(path.join(__dirname+'/client/build')));

// Routes
app.use('/api',require('./server/routes/index.routes'));

// Rutas con react-router que no coincidan con las rutas del backend
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/public/index.html'));
});

// Starting server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});