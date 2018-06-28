const ProductController = require("../controllers/main.ctrl")

module.exports = function (app) {
    app.get('/api/products', ProductController.retrieveAllProducts)
    app.get('/api/products/:idNum', ProductController.retrieveOneProduct)
    app.post('/api/products', ProductController.createProduct)
    app.put('/api/products/:idNum', ProductController.updateProduct)
    app.delete('/api/products/:idNum', ProductController.destroyProduct)
    // any additional routes and their coincident functions
}

