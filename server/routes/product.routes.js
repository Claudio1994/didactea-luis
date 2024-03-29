/* Libraries */
const express = require('express');
const xss = require('xss');
const fileUpload = require('express-fileupload');
const path = require('path');
const fs = require('fs');

/* Models */
const Product = require('../models/product.models');

/* Instances */
const app = express();

/* Middlewares */
const { authentication } = require('../middlewares/authentication');
app.use(fileUpload());

/* Routes */
//Obtener todos los productos
app.get('/', (req, res) => {
    Product.find()
        .then((productDB)=>{

            res.json({
                ok: true,
                products: productDB
            })
        })
        .catch((error)=> {
            res.status(400).json({
                ok: false,
                error
            });
        });
});

//Obtener un producto por id
app.get('/:id', (req, res) =>{
    let { id } = req.params;
    id = xss(id);
    Product.findById(id)
        .then((productDB)=>{

             res.json({
                ok: true,
                message: 'Producto encontrado exitosamente',
                product: productDB,
            });
        })
        .catch((error)=>{
            res.status(400).json({
                ok: false,
                error: {
                    message: 'No se ha encontrado el producto'
                }
            });
        });
});

// Agregar Producto
app.post('/create', authentication, async (req, res)=> {
    //variables
    let { name, description, image } = req.body;
    
    //seguridad xss
    name = xss(name);
    description = xss(description);
    image = xss(image);
    
    //comprobar que han subido un archivo
    if(!image){
        return res.status(400).json({
            ok: false,
            error: {
                message: 'No se ha seleccionado ninguna imagen'
            }
        });
    }
    
    //obtengo la extension del archivo
    let nombreCortado = image.split(';base64');
    let extension = nombreCortado[0].split(':image/')[1];
    //extensiones permitidas
    let extensionesPermitidas = ['jpg', 'png', 'jpeg'];

    //compruebo que la extension del archivo sea permitida
    if(extensionesPermitidas.indexOf(extension) < 0){
        return res.status(400).json({
            ok: false,
            error: {
                message: `Las extensiones válidas son ${extensionesPermitidas}`
            },
            extensiones: extensionesPermitidas
        });
    }

    //creo un objeto para guardar
    let product = new Product({
        name,
        description: description ? description : '',
        image
    });

    product.contentType = `img/${extension}`;
    
    //guardo el objeto
    product.save()
        .then((productDB)=>{
            //respuesta exitosa
            res.json({
                ok: true,
                message: 'Producto guardado exitosamente',
                product: productDB
            });
        })
        .catch((error)=>{
            //no se ha podido guardar
            //deleteFile(nombreImagen);

            res.status(400).json({
                ok: false,
                error: {
                    message: 'No se ha podido agregar el producto'
                }
            });
        });
});

app.put('/update', authentication,  (req, res) => {
    let { name, description, id, image } = req.body;
    name = xss(name);
    description = xss(description);
    id = xss(id);
    image = xss(image);

    Product.findById(id)
        .then((productDB) =>{
            if(image){
                //obtengo la extension del archivo
                let nombreCortado = image.split(';base64');
                let extension = nombreCortado[0].split(':image/')[1];
                console.log(extension);
                //extensiones permitidas
                let extensionesPermitidas = ['jpg', 'png', 'jpeg'];
                
                //compruebo que la extension del archivo sea permitida
                if(extensionesPermitidas.indexOf(extension) < 0){
                    return res.status(400).json({
                        ok: false,
                        error: {
                            message: `Las extensiones válidas son ${extensionesPermitidas}`
                        },
                        extensiones: extensionesPermitidas
                    });
                }
                
                productDB.image = image;
                productDB.contentType = `img/${extension}`;
            }

            productDB.name = name ? name : productDB.name;
            productDB.description = description ? description : productDB.description;


            productDB.save()
                .then((productUpdated)=> {
                    res.json({
                        ok: true,
                        message: 'Producto actualizado correctamente',
                        product: productUpdated
                    });
                })
                .catch((error) => {
                    res.status(400).json({
                        ok: false,
                        error: {
                            message: 'No se ha podido actualizar'
                        }
                    });
                });
        })
        .catch((error) =>{
            res.status(400).json({
                ok: false,
                error: {
                    message: 'No se ha encontrado el producto'
                }
            });
        });
});

app.delete('/delete/:id',authentication , (req, res)=>{
    let { id } = req.params;

    id = xss(id);

    Product.findByIdAndRemove(id)
        .then((productDB)=>{
            res.json({
                ok: true,
                message: 'Producto elminado exitosamente',
                productDB
            });
        })
        .catch((error) => {
            res.status(400).json({
                ok: false,
                error: {
                    message: 'No se ha podido eliminar el producto'
                }
            });
        });
});


// ===============================
//           Functions
// ===============================

module.exports = app;