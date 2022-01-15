const sequelize = require('../db/conexion')

module.exports = class productsModel {
    constructor(product) {
        this.product = product
    }
    async list() {
        let result = await sequelize.query("SELECT * FROM products");
        console.log(result)
        return result
    }

    async insert(product) {
        console.log(product)
        let result = await sequelize.query("INSERT INTO products (SKU,[name],[description],price) VALUES (" + product.SKU + ",'" + product.name + "','" + product.description + "'," + product.price + ")");
        return result;
    }

    async delete(productId){
        let result = await sequelize.query("DELETE FROM products WHERE SKU ="+ productId);
        return result;
    }

    async update(product){
        console.log(product)
        let result = await sequelize.query("UPDATE products SET price ='"+ product.price+"' WHERE SKU ="+product.SKU);
        return result;
    }


}


