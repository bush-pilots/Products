const relatedSchema = new Schema({
  related_id: Number,
  product_id: Number,
  related_product_id: Number,
})
const Related = mongoose.model('Related', relatedSchema);