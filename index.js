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
app.get('/products', controller.getProducts);

//returns all details for one product
app.get('/products/:product_id', controller.getOneProduct);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


