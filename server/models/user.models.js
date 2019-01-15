const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    lastname: {
        type: String,
        required: [true, 'El apellido es requerido']
    },
    email: {
        type: String,
        required: [true, 'El email es requerido']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es requerida']
    }
});

usuarioSchema.methods.toJSON = function(){
    let user = this;
    
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

module.exports = mongoose.model('Usuario', usuarioSchema);