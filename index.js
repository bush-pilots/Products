const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const database = require('./database/index.js');
const port = 3000;
const app = express();
//const {Product} = require('./models/productModel.js')
const controller = require('./controllers/controller.js')

app.use(express.json());

//retrieves the list of products
app.get('/products', controller.getProducts);

//returns the product level information for a specified product id
app.get('/products/:product_id', controller.getOneProduct);

//returns all styles available for a given product
app.get('/products/:product_id/styles', controller.getStyles);

//returns the id's of products related to the product specified
app.get('/products/:product_id/related', controller.getRelated);

app.get('/loaderio-53f255475aae8b9229cc655c12771fae', (req, res) => {
  res.send('loaderio-53f255475aae8b9229cc655c12771fae');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


