// En este modulo se definen las funciones que utiliza cada ruta,
//obteniendose como resultado los arreglos provinientes de las peticiones a la bd
const querys = require('./../querys/querys');
const connection = require('./../config/config');

const getProducts = (req,res) =>{  //Obtener todos los productos
    const sql = querys.selectProducts()
      connection.query(sql, (error, results) => {
        if (error) console.log(error, 'ERROR QUERY')
        if (results.length > 0) {
          res.send(results);
        } else {
          res.send('Sin resultados');
        } 
      });
  }
const getCategories = (req,res) =>{  //Obtener todas las categorias
    const sql = querys.selectCategories()
      connection.query(sql, (error, results) => {
        if (error) console.log(error, 'ERROR QUERY')
        if (results.length > 0) {
          res.send(results);
        } else {
          res.send('Sin resultados');
        } 
      });
  }

  const getProductsByWord = (req,res) =>{  //Obtener productos segun una palabra
    let {word} = req.body;
    const sql = querys.selectProductsByWord( word )
    connection.query(sql, async (error, results) => {
      if (error) console.log(error, 'ERROR');
      if (results.length > 0) {
         res.send(results);
      } else {
        res.send('Sin resultados');
      } 
    })
  }


  module.exports = {
      getProducts,
      getProductsByWord,
      getCategories
  }




