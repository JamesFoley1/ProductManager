const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/products', {useNewUrlParser: true}, (errs => console.log(errs)));

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 4},
    price: {type: String, required: true},
    url: String
}, { timestamps: true });

module.exports = mongoose.model('product', ProductSchema);