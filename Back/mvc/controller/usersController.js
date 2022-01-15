const jwt = require('jsonwebtoken')

const usersModel = require('../model/usersModel')
module.exports.listUsers = async () => {
    let response = new usersModel();
    let result =await response.list()
    return result;
}

module.exports.loginUser = async (user) => {
    let login = new usersModel();
    let data = await login.loginUser(user)
    if (data) {
        token = jwt.sign({ data }, process.env.SECRETKEY);
        return token;
    }
    else {
        return false
    }
}
