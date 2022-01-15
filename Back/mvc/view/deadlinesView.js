const deadlinesController = require('../controller/deadlinesController')
module.exports = async (app) => {
    app.get('/deadlines', async (req, res) => {
        res.send(await deadlinesController.listdeadlines());

    });

    app.post('/deadlines/insert', async (req, res) => {
        let deadline = req.body;
        res.send(await deadlinesController.insertDeadline(deadline));
    });
    
};