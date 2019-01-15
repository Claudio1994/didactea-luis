const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre de la imagen es requerido']
    }
});

module.exports = mongoose.model('Image', imageSchema);