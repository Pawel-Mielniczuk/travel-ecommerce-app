const express = require('express');
const products = require('./data/products');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.get('/', (req, res) => {
  
});

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/product/:id', (req, res) => {
  const product = products.find(product => product._id === req.params.id) 
  res.json(product)
});

const PORT = process.env.PORT || 4000

app.listen(PORT, console.log(`Server  running in ${process.env.NODE_ENV} mode on port ${PORT}`));

