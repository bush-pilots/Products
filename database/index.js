const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://localhost:27017/ProductsDB', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected!')
});
module.exports = {db}
/*
const csv = require('csv-parser')
const fs = require('fs')
const mongoose = require('mongoose');
const Style = require("../models/style");

// To avoid the new line when printing
console.log = function (d) {
  process.stdout.write(d);
};

var count=0;
var path = '../../DataFiles/styles.csv'
fs.createReadStream(path)
  .pipe(csv())
  .on('data', (data) => {
    let zipArr = data['zips'].split(" ");
    var newCity = new City({
      cityName: data['city'],
      state:data['state_name'],
      cityDisplayName:data['display_name'],
      zips:zipArr,
    });

    newCity.save(function(err, item) {
      if (item) {
        count++
        console.log(", "+count);
      }
      if (err) {
       console.log("Error")
      }
    });
    })
  .on('end', () => {
    console.log("Done");
  });
  */