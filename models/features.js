const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const featureSchema = new mongoose.Schema({
  feature_id: Number,
  product_id: {
    type: Schema.Types.ObjectId, ref: 'Product'
  },
  feature: String,
  value: String,
}, {collection: 'features'});

const Feature = mongoose.model('Feature', featureSchema);

module.exports = Feature;