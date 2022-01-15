const sequelize = require('../db/conexion')

module.exports = class deadlinesModel {
    constructor (deadline ){
        this.deadline = deadline 
    }
    async list (){
        let result = await sequelize.query("SELECT * FROM deadlines");
        console.log (result)
        return result
    }

    async insert(deadline) {
        console.log(deadline)
        let result = await sequelize.query("INSERT INTO deadlines (weeks, normal_rate, punctual_rate) VALUES ("+deadline.weeks +"," + deadline.normal +"," + deadline.punctual + ")");
        return result;
    }
}




  