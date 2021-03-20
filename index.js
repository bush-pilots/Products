const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const database = require('./database/index.js');
const port = 3000;
const app = express();
const {Product} = require('./models/productModel.js')

app.use(express.json());

//returns all documents in product collection
app.get('/products', function(req, res) {
  Product.find({}, function (err, docs) {
    if (err) {
      console.log('error')
    } else {
      console.log(docs)
    }
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


