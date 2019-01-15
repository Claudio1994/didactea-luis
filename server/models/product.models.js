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
    images: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Image'
        }
    ]
});

module.exports = mongoose.model('Product', productSchema);