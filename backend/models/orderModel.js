const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      },
      size: String,
      quantity: Number
    }
  ],
  status: {
    type: String,
    default: 'Pending'
  }
});

module.exports = mongoose.model('Order', orderSchema);
