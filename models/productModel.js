const mongoose = require('mongoose');
const connection = require('../database/index.js');

const productSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
});

const Product = mongoose.model('Product', productSchema)

const queryGetProducts = async (page, count) => {
  const pageNum = parseInt(page) || 1;
  const countNum = parseInt(count) || 5;
  const beginIndex = (pageNum - 1) * (countNum) + 1;
  const endIndex = beginIndex + countNum - 1;

  const productList = await Product.find({_id: {$gte: beginIndex, $lte: endIndex}})

  return productList;
}

module.exports = {
  Product,
  queryGetProducts
};