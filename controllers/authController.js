const User = require('../models/User');
const generateToken = require('../utils/generateToken');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && await user.matchPassword(password)) {
    res.json({ access_token: generateToken(user._id) });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    await User.create({ username, password });
    res.status(201).json({ message: 'User registered' });
  } catch {
    res.status(409).json({ message: 'User already exists' });
  }
};
