const mongoose = require('mongoose');


exports.queryGetProducts = async (page, count) => {
  const pageNum = parseInt(page) || 1;
  const countNum = parseInt(count) || 5;
  const beginIndex = (pageNum - 1) * (countNum) + 1;
  const endIndex = beginIndex + countNum - 1;

  const productList = await Product.find({_id: {$gte: beginIndex, $lte: endIndex}})

  return productList;
}