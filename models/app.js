const mongoose = require('mongoose');
const Product = require('./product.js');
const Related = require('./related.js')

//Query returns basic product data for a group of items
exports.queryGetProducts = async (page, count) => {
  const pageNum = parseInt(page) || 1;
  const countNum = parseInt(count) || 5;
  const beginIndex = (pageNum - 1) * (countNum) + 1;
  const endIndex = beginIndex + countNum - 1;

  return await Product.find({product_id: {$gte: beginIndex, $lte: endIndex}})
}

//Query returns detailed product data for a single item
exports.queryOneProduct = async (product_id) => {
  const product = await Product.aggregate([
    { $match: {product_id: parseInt(product_id)} },
    { $lookup: {
        from: 'features',
        localField: 'product_id',
        foreignField: 'product_id',
        as: 'features'
      }
    }
  ])
  return product[0];
}

exports.queryRelated = async (product_id) => {
  const related = await Related.find({product_id: 1})
  const array = [];
  for(var i = 0; i < related.length; i ++) {
    array.push(related[i]['related_product_id'])
  }
  return array;
}