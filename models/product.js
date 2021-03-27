const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
  product_id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
  // tags: { type: [String], index: true},
},
{
  collection: 'Products'
});

module.exports = mongoose.model('Product', productSchema);
