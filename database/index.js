const mongoose = require('mongoose');
const {Schema} = mongoose;

//mongoose.connect('mongodb://localhost:27017/ProductsDB', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

module.exports = {db}