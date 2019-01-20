const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre del producto es requerido']
    },
    description:{
        type: String
    },
    image: {
        type: String,
        required: [true, 'La imagen es requerida']
    },
    contentType: {
        type: String,
        required: [true, 'El contentType de la imagen es requerido']
    }
});

module.exports = mongoose.model('Product', productSchema);