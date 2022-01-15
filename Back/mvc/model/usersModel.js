const sequelize = require('../db/conexion')

module.exports = class usersModel {
    constructor (user ){
        this.user = user 
    }
    async list (){
        let result = await sequelize.query("SELECT * FROM users");
        console.log (result)
        return result
    }

    async loginUser(user) {
        console.log(user)
        let result = await sequelize.query("SELECT  id_user,[name],last_name,email FROM users WHERE [email] ='" + user.email + "' AND [password] = '" + user.password + "'");
        if (result[0].length > 0) {
            return result[0][0]
        }
        else {
            return false
        }
    }

}



