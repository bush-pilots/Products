import mongoose from 'mongoose';
const {Schema} = mongoose;

//each schema maps to a collection and defines the shape of the documents within that collection
const productSchema = new Schema({
  product_id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
  features: [
    {
      feature_id: Number,
      feature: String,
      value: String
    }
  ]
  related: {
    related_id: Number,
    related_product_id: Number,
  }
  styles: [
    {
      style_id: Number,
      style_name: String,
      original_price: Number,
      sale_price: Number,
      default: Boolean,
      photos: [
        {
          photo_id: Number,
          url: String,
          thumbnail_url: String,
        }
      ]
      skus: {
          sku_id: Number,
          size: String,
          quantity: Number,
        }
    }
  ]
})

//Models - constructors compiled from Schema definitions. An instance of a model is called a document.
const Product = mongoose.model('Product', productSchema);

module.exports = mongoose.model("Product", productSchema)