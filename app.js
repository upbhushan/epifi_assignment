const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());


app.use('/', authRoutes);           
app.use('/products', productRoutes); 

module.exports = app;
