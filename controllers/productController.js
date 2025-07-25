const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ product_id: product._id });
};

exports.updateQuantity = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  const product = await Product.findByIdAndUpdate(id, { quantity }, { new: true });
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

exports.getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};
