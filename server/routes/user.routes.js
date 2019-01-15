/* Libraries */
const express = require('express');
const xss = require('xss');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');


/* Models */
const User = require('../models/user.models');

/* Middlewares */
const { authentication } = require('../middlewares/authentication');

/* Instances */
const app = express();

/* Routes */

// Obtiene los datos de la persona
app.get('/', authentication, (req, res) => {

    User.findOne({email: req.user.email})
        .then((userDB) => {
            res.json({
                ok: true,
                usuario: userDB
            });
        })
        .catch((err) => {
            res.status(400).json({
                ok: false,
                err
            });
        });
});

// Actualiza los campos de name, lastname o email
app.put('/update', authentication, (req, res) =>{
    
    let { name, lastname, email } = req.body;

    name = xss(name);
    lastname = xss(lastname);
    email = xss(email);

    if(email === req.user.email){
        return res.status(400).json({
            ok: false,
            error: {
                message: 'El email debe de ser diferente al actual'
            }
        });
    }

    User.findOne({email: req.user.email})
        .then((userDB) => {
            userDB.name = name ? name : userDB.name;
            userDB.lastname = lastname ? lastname : userDB.lastname;
            userDB.email = email ? email : userDB.email;

            userDB.save()
                .then((userUpdated) => {
                    let token = jwt.sign({
                        user: userDB
                    }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });

                    res.json({
                        ok: true,
                        user: userUpdated,
                        token
                    });
                })
                .catch((error)=> {
                    res.status(400).json({
                        ok: false,
                        error
                    });
                });
        })
        .catch((error) => {
            res.status(400).json({
                ok: false,
                error: {
                    message: 'Usuario no encontrado'
                }
            });
        });RecuperarContraseña
});

// Actualiza la contraseña
app.put('/updatePassword', (req, res) =>{
    
    let { password } = req.body.password;

    password = xss(password);

    User.findOne({email: req.user.email})
        .then((userDB) =>{
            userDB.password = password ? bcrypt.hashSync(password, 10) : undefined;
    
            userDB.save()
                .then((userUpdated) => {
                    res.json({
                        ok: true,
                        message: 'Contraseña actualizada'
                    });
                })
                .catch((error) => {
                    res.status(400).json({
                        ok: false,
                        error
                    });
                });
        })
        .catch((error) => {
            res.status(400).json({
                ok: false,
                error: {
                    message: 'Usuario no encontrado'
                }
            });
        });
});

// Recuperar la contraseña
app.get('/forgotPassword/:token', (req, res) => {
    let token = req.params.token;

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if( err ){
            let tokenGenerado = jwt.sign({ok: true}, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });

            return sendEmail(tokenGenerado, res);

        }

        res.json({
            ok: true,
            message: 'funciona'
        })

    });
});


/* Funciones */

// Funcion para 
sendEmail = (token, res)=>{

    // Definimos el transporter
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'claudio.ore94@gmail.com',
            pass: 'Soyalkoholiko'
        }
    });

    // Definimos el email
    let mailOptions = {
        from: 'claudio.ore94@gmail.com',
        to: 'claudio.ore94@gmail.com',
        subject: 'Prueba email node',
        text: `Contenido del email \n salto de linea \n`,
        html: `<a href="https://didactea.herokuapp.com/api/user/cambioContraseña/${token}">localhost:3000/api/user/cambioContraseña/${token}</a>`
    };

    // Enviamos el email
    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
            return res.status(500).json({
                ok: false,
                error
            });
        }

        console.log("Email sent");
        res.json({
            ok: true,
            message: 'Email enviado'
        });
    });
};

module.exports = app;