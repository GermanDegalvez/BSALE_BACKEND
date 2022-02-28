//Aqui va a habert un listado de funciones , donmde las funciones van a devolver una query diferente
const querys = {
    selectProducts : () => {
        let sql = "SELECT * FROM product";
        return sql;
    },
    selectByCategory : () => {
        const sql = `SELECT  product.name, product.price, product.url_image, category.name AS category FROM product INNER JOIN category ON product.category = category.id`
        return sql;
    },
    getProductsByWord : (word) => {
        const sql = `SELECT * FROM product WHERE product.name LIKE '%${word}%'`
        return sql;
    },
    sortByPriceAsc : () => {
        const sql = `SELECT * FROM product ORDER BY product.price ASC`
        return sql;
    },
    sortByPriceDesc : () => {
        const sql = `SELECT * FROM product ORDER BY product.price DESC`
        return sql;
    }
}


// exportar todas las funciones de este

module.exports = querys
