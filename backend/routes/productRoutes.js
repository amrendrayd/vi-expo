const express = require('express');
const { getAllProducts, addProduct } = require('../controllers/productController');
const protect = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', getAllProducts);
router.post('/', protect, addProduct);

module.exports = router;
