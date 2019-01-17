const mongoose = require('mongoose');

process.env.prod = process.env.prod || 'local' ;

let URI;

if(process.env.prod === 'local'){
    URI = 'mongodb://localhost/didactea';
}else{
    URI = process.env.URI;
}


mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));
