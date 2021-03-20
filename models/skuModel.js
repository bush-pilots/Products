const skuSchema = new Schema ({
  sku_id: Number,
  style_id: Number,
  size: String,
  quantity: Number,
})
const Sku = mongoose.model('Sku', skuSchema);