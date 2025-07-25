const express = require('express');
const { addProduct, updateQuantity, getProducts } = require('../controllers/productController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, addProduct);
router.put('/:id/quantity', protect, updateQuantity);
router.get('/', protect, getProducts);

module.exports = router;
