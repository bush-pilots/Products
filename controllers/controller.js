// import Product from '../models/productModel.js';
const products = require('../models/app.js');


exports.getProducts = async (req, res) => {
  const results = await products.queryGetProducts(
    req.query.page,
    req.query.count
    );
    res.send(results);
  };

exports.getOneProduct = async (req, res) => {
  const { product_id } = req.params;
  const results = await products.queryOneProduct(product_id);
  res.send(results);
};

exports.getRelated = async (req, res) => {
  const { product_id } = req.params;
  const results = await products.queryRelated(product_id);
  res.send(results);
}

