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

exports.getStyles = async (req, res) => {
  const { product_id } = req.params;
  const results = await products.queryStyles(product_id);
  res.send('Not implemented');
}

exports.getRelated = async (req, res) => {
  const { product_id } = req.params;
  const results = await products.queryRelated(product_id);
  res.send(results);
}

