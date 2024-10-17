const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  rating: Number,
  image: String,
  sizes: {
    type: Map,
    of: Number 
  }
});

module.exports = mongoose.model('Product', productSchema);
