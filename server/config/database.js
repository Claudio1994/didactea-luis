const mongoose = require('mongoose');

process.env.prod = process.env.prod || 'local' ;

let URI;

if(process.env.prod === 'local'){
    URI = 'mongodb://localhost/didactea';
}else{
    URI = `mongodb://${process.env.DBUSER}:${process.env.DBPASS}@ds133094.mlab.com:33094/didactea-luis`;
}


mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));
