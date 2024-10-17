const Product = require('../models/productModel');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const addProduct = async (req, res) => {
  const { name, description, price, rating, sizes, image } = req.body;
  try {
    const product = new Product({ name, description, price, rating, sizes, image });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAllProducts, addProduct };
