const Order = require('../models/orderModel');
const Product = require('../models/productModel');

const placeOrder = async (req, res) => {
  const { products } = req.body; 
  try {
    
    const order = new Order({ userId: req.user, products });
    await order.save();

    for (let item of products) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      const availableQuantity = product.sizes.get(item.size);
      if (availableQuantity === undefined || availableQuantity < item.quantity) {
        return res.status(400).json({ message: 'Insufficient stock' });
      }

      product.sizes.set(item.size, availableQuantity - item.quantity);
      await product.save();
    }

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { placeOrder };

  
