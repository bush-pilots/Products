const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
  product_id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
},
{
  collection: 'Products'
});

productSchema.index({product_id: 1});

module.exports = mongoose.model('Product', productSchema);
