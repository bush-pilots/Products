// import Product from '../models/productModel.js';
const products = require('../models/productModel.js');


getProducts = async (req, res) => {
  const results = await products.queryGetProducts(
    req.query.page,
    req.query.count
  );
  res.send(results);
};

module.exports = {getProducts}