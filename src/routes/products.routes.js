//Aca tenemos el router, que recibe las rutas de nuestro front y ejecuta la funcion correspondiente
//desde el modulo de products.controllers 
const express = require('express');
var router = express.Router();
var controllers = require('./../../src/controllers/products.controller');

// Rutas
router.get('/getProductsById', controllers.getProducts );
router.get('/getCategories', controllers.getCategories );
router.post('/getProductsByWord' ,controllers.getProductsByWord);



module.exports = router

