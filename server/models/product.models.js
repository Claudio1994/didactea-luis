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
        required: [true, 'Ingrese una imagen'] 
    }
});

module.exports = mongoose.model('Product', productSchema);