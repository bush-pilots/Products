const styleSchema = new Schema({
  style_id: Number,
  product_id: Number,
  style_name: String,
  sale_price: Number,
  original_price: Number,
  default: Boolean,
})
const Style = mongoose.model('Style', styleSchema);