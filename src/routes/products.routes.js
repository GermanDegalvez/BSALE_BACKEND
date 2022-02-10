// todos los endopints y a que funcion del controller llama 
// se importara todas las funciones del controlado
const express = require('express');
var router = express.Router();
var functions = require('./../../src/controllers/products.controller')

// TODOS LOS GET
router.get('/getProducts', functions.getProducts );


module.exports = router

