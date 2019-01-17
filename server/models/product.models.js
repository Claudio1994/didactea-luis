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
        data: Buffer,
        contentType: String
    }
});

productSchema.methods.toJSON = function(){
    let user = this;
    
    let userObject = user.toObject();
    delete userObject.image;

    return userObject;
}

module.exports = mongoose.model('Product', productSchema);