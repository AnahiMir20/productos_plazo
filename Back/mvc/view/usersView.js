const validation = require('../middleware/validation')
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")

const userController = require('../controller/usersController')
module.exports = async (app) => {
    app.get('/users', async (req, res) => {
        res.send(await userController.listUsers());

    });
    
    app.post('/login', validation.loginValidation, async (req, res) => {
    let user = req.body;
    let token = await userController.loginUser(user)
    if (token == false) {
        res.status(400).json({ error: 'Usuario no encontrado' })
    } else {
        res.send(token);
    }
});

};


