const productController = require('../controller/productsController')
module.exports = async (app) => {
    app.get('/products', async (req, res) => {
        res.send(await productController.listProducts());

    });

    app.post('/products/insert', async (req, res) => {
        let product = req.body;
        res.send(await productController.insertProduct(product));
    });

    app.delete('/products/delete/:id', async (req, res) => {
        let productId = req.params.id;
        res.send(await productController.deleteProduct(productId));

    });

    app.put('/products/update', async (req, res) => {
        let product = req.body;
        res.send(await productController.updateProduct(product));
    })

    app.post('/products/find', async (req, res) => {
        let product = req.body;
        res.send(await productController.findProduct(product));
    });
};
