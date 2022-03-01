// importar la liberaria de mysql para node , y ejecutar las querys
const querys = require('./../querys/querys');
const connection = require('./../config/config');

let products = [];                                      

// function groupBy(key) {
//   return function group(array) {
//     return products.reduce((acc, obj) => {
//       const property = obj[key];
//       acc[property] = acc[property] || [];
//       acc[property].push(obj);
//       return acc;
//     }, {});
//   };
// }
// products = results;
// const groupByCategory = groupBy("category");
// const grouped = (groupByCategory(results.name))
// console.log(grouped.snack[2].name)
// res.json(grouped)



const getProducts = (req,res) =>{  
    const sql = querys.selectProducts()
    connection.query(sql, (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        res.send(results);
      } else {
        res.send('Sin resultados');
      } 
    })
  }

  const getProductsByWord = (req,res) =>{  
    let {word} = req.body;
    const sql = querys.selectProductsByWord( word )
    connection.query(sql, async (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
         res.send(results);
      } else {
        res.send('Sin resultados');
      } 
    })
  }


  module.exports = {
      getProducts,
      getProductsByWord
  }




