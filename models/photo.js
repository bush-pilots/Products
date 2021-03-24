const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = Schema({
  photo_id: Number,
  style_id: Number,
  url: String,
  thumbnail_url: String,
},
{
  collection: 'Photos'
});

module.exports = mongoose.model('Photo', photoSchema);


