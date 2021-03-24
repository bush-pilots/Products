const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skuSchema = Schema ({
  sku_id: Number,
  style_id: Number,
  size: String,
  quantity: Number,
},
{
  collection: 'SKUs'
});

module.exports = mongoose.model('Sku', skuSchema);