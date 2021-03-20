const featureSchema = new Schema({
  feature_id: Number,
  product_id: Number,
  feature: String,
  value: String,
})
const Feature = mongoose.model('Feature', featureSchema);