const deadlinesModel = require('../model/deadlinesModel')
module.exports.listdeadlines = async () => {
    let response = new deadlinesModel();
    let result =await response.list()
    return result;
}

module.exports.insertDeadline = async (deadline) => {
    let response = new deadlinesModel();
    let result = await response.insert(deadline)
    return result;
}