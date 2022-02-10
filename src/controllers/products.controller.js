// importar la liberaria de mysql para node , y ejecutar las querys
const querys = require('./../querys/querys');
const connection = require('./../config/config')


const getProducts = (req,res) =>{
    const sql = querys.selectProducts()
    connection.query(sql, (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        res.json(results);
      } else {
        res.send('Sin resultados');
      }
    })
  }

  module.exports = {
      getProducts
  }




