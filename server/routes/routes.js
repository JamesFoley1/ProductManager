const bodyParser = require('body-parser');
const api = require('../controllers/controller');

function router(app){
    //ensures we receive json data w/ parser
    app.use(bodyParser.json());

    app.get('/api/products', api.allProducts);

    app.get('/api/products/:id', api.oneProduct);

    app.post('/api/products/new', api.createProduct);

    app.post('/api/products/edit/', api.updateProduct);

    app.get('/api/products/destroy/:id', api.deleteProduct);

    return app;
}

module.exports = router;