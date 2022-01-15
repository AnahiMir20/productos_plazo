const sequelize = require('../db/conexion')

module.exports = class deadlinesModel {
    constructor (product ){
        this.product = product 
    }
    async list (){
        let result = await sequelize.query("SELECT * FROM deadlines");
        console.log (result)
        return result
    }
}
