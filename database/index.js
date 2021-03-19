const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Products', {useNewUrlParser: true, useUnifiedTopology: true}),

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {


  const productSchema = new mongoose.Schema({
    product_id: Number,    //question: Can I use _id to create the primary key, do I want to?
    name: String,
    slogan: String,
    description: String,
    category: String,
    default_price: Number,
    features: [{feature_id: Number, product_id: Number, feature: String, value: String}],  //reference to products????
    styles:

  })
})








module.exports = {
  getProducts,
}