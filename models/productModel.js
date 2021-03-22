const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
  product_id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
});

const featureSchema = Schema({
  feature_id: Number,
  product_id: Number,
  feature: String,
  value: String,
});

const Product = mongoose.model('Product', productSchema);
const Feature = mongoose.model('Feature', featureSchema);

const queryGetProducts = async (page, count) => {
  const pageNum = parseInt(page) || 1;
  const countNum = parseInt(count) || 5;
  const beginIndex = (pageNum - 1) * (countNum) + 1;
  const endIndex = beginIndex + countNum - 1;

  return await Product.find({product_id: {$gte: beginIndex, $lte: endIndex}})
}

const queryOneProduct = async (product_id) => {
  const product = await Product.aggregate(
    [{$match: {product_id: parseInt(product_id)}},
    { $lookup: {
        from: 'features',
        localField: 'product_id',
        foreignField: 'product_id',
        as: 'features'
      }}])

  return product[0];
}

module.exports = {
  Product,
  Feature,
  queryGetProducts,
  queryOneProduct,
};