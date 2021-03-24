const mongoose = require('mongoose');
const Product = require('./product.js');
const Related = require('./related.js');
const Style = require('./style.js');
const Photo = require('./photo.js');
const SKU = require('./sku.js');

//Query returns basic product data for a group of items
exports.queryGetProducts = async (page, count) => {
  const pageNum = parseInt(page) || 1;
  const countNum = parseInt(count) || 5;
  const beginIndex = (pageNum - 1) * (countNum) + 1;
  const endIndex = beginIndex + countNum - 1;

  return await Product.find({product_id: {$gte: beginIndex, $lte: endIndex}})
}

//Query returns detailed product data for a single item
exports.queryOneProduct = async (product_id) => {
  const product = await Product.aggregate([
    { $match: {product_id: parseInt(product_id)} },
    { $lookup: {
        from: 'features',
        localField: 'product_id',
        foreignField: 'product_id',
        as: 'features'
      }
    }
  ])
  return product[0];
}

exports.queryStyles = async (product_id) => {
  // const styles = await Style.find({product_id: parseInt(product_id)}, 'style_id style_name sale_price original_price default')
  // let style_ids = [];
  // let styleObj = {};
  // const returnObj = {};
  // returnObj.product_id = product_id;
  // returnObj['results'] = styles;
  // for (let i = 0; i < styles.length; i ++) {
  //   style_ids.push(styles[i].style_id);
  //   styleObj
  // }
  // for (let j = 0; j < style_ids.length; j ++) {
  //   photos = await Photo.find({style_id: style_ids[j]}, 'url thumbnail_url');
  //   returnObj.results.styles']['photos'] = photos;
  //   skus = await SKU.find({style_id: style_ids[j]}, 'sku_id size quantity');
  // }
  // returnObj.photos = photos;
  // console.log(console.log(returnObj))
  // const styleObj
}

exports.queryRelated = async (product_id) => {
  const related = await Related.find({product_id: parseInt(product_id)})
  const array = [];
  for(var i = 0; i < related.length; i ++) {
    array.push(related[i]['related_product_id']);
  }
  return array;
}