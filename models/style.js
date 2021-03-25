const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const styleSchema = Schema({
  product_id: Number,
  results: [{
    style_id: Number,
    style_name: String,
    sale_price: Number,
    original_price: Number,
    default: Boolean,
  }]
  },
  {
    collection: 'Styles'
});

module.exports = mongoose.model('Style', styleSchema);