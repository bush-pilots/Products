//each schema maps to a collection and defines the shape of the documents within that collection
//Models - constructors compiled from Schema definitions. An instance of a model is called a document.
const mongoose = require('mongoose');
const connection = require('../database/index.js');

const productSchema = new mongoose.Schema({
  product_id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
});

const Product = mongoose.model('Product', productSchema)
module.exports = {Product};