const deadlinesModel = require('../model/deadlinesModel')
module.exports.listdeadlines = async () => {
    let response = new deadlinesModel();
    let result =await response.list()
    return result;
}
