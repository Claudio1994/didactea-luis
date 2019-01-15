const mongoose = require('mongoose');

const URI = process.env.DB || 'mongodb://localhost/didactea';

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));