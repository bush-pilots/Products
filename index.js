const express = require('express');
const morgan = require('morgan')('dev');
const request = './database/index.js';
const app = express();
const port = 3000;


//app.get('/products', request.getProducts)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})