/* Libraries */
const express = require('express');
const xss = require('xss');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');


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
app.put('/updatePassword', authentication, (req, res) =>{
    
    let { password, newPassword } = req.body;

    password = xss(password);
    newPassword = xss(newPassword);

    User.findOne({email: req.user.email})
        .then((userDB) =>{
            if(bcrypt.compareSync(password, userDB.password)){
                userDB.password = newPassword ? bcrypt.hashSync(newPassword, 10) : undefined;
    
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
            }else{
                res.status(400).json({
                    ok: false,
                    error: {
                        message: 'Contraseña inválida'
                    }
                });
            }
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

// Envio de correo para recuperar contraseña
app.get('/forgotPassword', (req, res) => {

    let { email } = req.body;

    User.findOne({email})
        .then((userDB) =>{
            //genero un nuevo token
            let tokenGenerado = jwt.sign({
                    ok: true,
                    user: userDB
                }, 
                process.env.SEED, { expiresIn: 60*15 });

            //funcion que envia un correo con el token generado o retorna un error
            return sendEmail(tokenGenerado, res, email);
        })
        .catch((error) => {
            return res.status(400).json({
                ok: false,
                error: {
                    message: 'El email no existe'
                }
            });
        });
});

// Compruebo que el token del email aún sea válido
app.get('/checkTokenEmail', (req, res)=>{
    let token = req.get('authorization');

    jwt.verify(token, process.env.SEED, (error, decoded) => {
        if(error){
            return res.status(401).json({
                ok: false,
                error
            });
        }

        res.json({
            ok: true,
            message: 'token válido'
        });
    });
});

// Cambio la contraseña perdida
app.put('/changeForgottenPassword', authentication, (req, res) => {
    let { password } = req.body;

    let { email } = req.user;
    
    User.findOne({email})
        .then((userDB) => {
            password = xss(password);
            userDB.password = password ? bcrypt.hashSync(password, 10) : undefined;
            console.log('here');
            
            userDB.save()
                .then((userUpdated) =>{
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
        .catch((error) =>{
            res.status(400).json({
                ok: false,
                error: {
                    message: 'El email no existe'
                }
            })
        });
});


// =====================
//      Funciones 
// ===================== 

// Funcion para 
sendEmail = (token, res, email)=>{

    // Definimos el transporter
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'claudio.desarrollador@gmail.com',
            pass: process.env.PASSWORD
        }
    });

    let url = "localhost:3000/changeForgottenPassword?token="+token;

    let html = `<div>
            <div> <h3>Haz click en el enlace para recuperar contraseña</h3></div>
            <div>El link caducará en 15 minutos</div>
            <div><a href="${url}">${url}</a><div>
        </div>`;

    // Definimos el email
    let mailOptions = {
        from: 'claudio.desarrollador@gmail.com',
        to: email,
        subject: 'Prueba email node',
        text: '',
        html
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

        res.json({
            ok: true,
            message: 'Se ha enviado un email a tu correo'
        });
    });
};

module.exports = app;