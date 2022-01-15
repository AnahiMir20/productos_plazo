const deadlinesController = require('../controller/deadlinesController')
module.exports = async (app) => {
    app.get('/deadlines', async (req, res) => {
        res.send(await deadlinesController.listdeadlines());

    });
};