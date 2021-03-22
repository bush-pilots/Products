const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const relatedSchema = Schema({
  related_id: Number,
  product_id: Number,
  related_product_id: Number,
},
{
  collection: 'Related'
});

module.exports = mongoose.model('Related', relatedSchema);


