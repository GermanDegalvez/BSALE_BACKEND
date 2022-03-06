//Definicion de las funciones que contienen las querys a utilizar
const querys = {
    selectProducts : () => {
        let sql = "SELECT * FROM product";
        return sql;
    },
    selectCategories : () => {
        const sql = "SELECT * FROM category";
        return sql;
    },
    selectProductsByWord : (word) => {
        const sql =`SELECT  product.name, product.price, product.url_image, category.name AS category FROM product INNER JOIN category ON product.category = category.id  WHERE product.name LIKE '%${word}%' OR category.name LIKE '%${word}%'`
        return sql;
    }
}



module.exports = querys
