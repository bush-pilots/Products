const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const database = require('./database/index.js');
const port = 3000;
const app = express();
//const {Product} = require('./models/productModel.js')
const controller = require('./controllers/controller.js')

app.use(express.json());

//returns all documents in product collection
app.get('/products', controller.getProducts); //async function(req, res) {
//   const page = parseInt(req.query.page) || 1;
//   const count = parseInt(req.query.count) || 5;
//   const beginIndex = (page - 1) * (count) + 1;
//   const endIndex = beginIndex + count - 1;
//   console.log(beginIndex, endIndex)

//   await Product.find({}, function (err, docs) {
//     if (err) {
//       console.log('error')
//     } else {
//       console.log(docs)
//     }
//   })
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


