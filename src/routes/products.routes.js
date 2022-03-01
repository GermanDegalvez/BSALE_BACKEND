// todos los endopints y a que funcion del controller llama 
// se importara todas las funciones del controlado
const express = require('express');
var router = express.Router();
var controllers = require('./../../src/controllers/products.controller');

// TODOS LOS GET
router.get('/getProductsById', controllers.getProducts );
router.post('/getProductsByWord' ,controllers.getProductsByWord);



module.exports = router

