const Products = require('../models/models');

function allProducts(req, res){
    Products.find({})
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
};

function oneProduct(req, res){
    Products.findById(req.params.id)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
};

function createProduct(req, res){
    Products.create(req.body)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
};

function updateProduct(req, res){
    Products.findByIdAndUpdate(req.body._id, req.body)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
};

function deleteProduct(req, res){
    Products.findByIdAndRemove(req.params.id)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
};

module.exports.allProducts = allProducts;
module.exports.oneProduct = oneProduct;
module.exports.createProduct = createProduct;
module.exports.updateProduct = updateProduct;
module.exports.deleteProduct = deleteProduct;

// const mongoose = require('mongoose');
// mongoose.Types.ObjectId(req.body._id)
// let id = req.body._id;
// Tasks.findByIdAndUpdate(id, req.body)