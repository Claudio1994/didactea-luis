/* Libraries */
const express = require('express');
const bcrypt = require('bcrypt');
const xss = require('xss');
const jwt = require('jsonwebtoken');

/* Models */
const User = require('../models/user.models');

/* Instance */ 
const app = express();

/* Configuration */
require('../config/config');

/* Routes */

// Login
app.post('/', (req, res) => {
    // obtengo inputs
    console.log(req.body);
    let { email, password } = req.body;

    //quito los caracteres no permitidos
    email = xss(email);
    password = xss(password);

    //busco el email del usuario
    User.findOne({email})
        .then((userDB) => {

            //comparo la contraseña del usuario y si no es válida devuelvo un error
            if(!bcrypt.compareSync(password, userDB.password)){
                return res.status(400).json({
                    ok: false,
                    error: {
                        message: 'Email o (contraseña) incorrecto'
                    }
                });
            }

            //creo un token
            let token = jwt.sign({
                user: userDB
            }, process.env.SEED, { expiresIn: CADUCIDAD_TOKEN });
            
            // 
            res.json({
                ok: true,
                user: userDB,
                token
            });

        })
        .catch((err) =>{
            res.status(400).json({
                ok:false,
                error: {
                    message: '(Email) o contraseña incorrecto'
                }
            });
        });

});

// Register
app.post('/signUp', (req, res) =>{

    let {name, lastname, email, password} = req.body;

    name = xss(name);
    lastname = xss(lastname);
    email = xss(email);
    password = xss(password);

    let user = new User({
        name,
        lastname,
        email,
        password: password ? bcrypt.hashSync(password, 10) : undefined
    });

    user.save((error, userDB) =>{

        if(error){
            return res.status(400).json({
                ok: false,
                error
            });
        }

        res.json({
            ok: true,
            user: userDB
        });
    });
});

module.exports = app;