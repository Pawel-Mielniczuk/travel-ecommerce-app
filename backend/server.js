const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/', (req, res) => {
  
});

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/product/:id', (req, res) => {
  const product = products.find(product => product._id === req.params.id) 
  res.json(product)
})

app.listen(4000, console.log(`Server is running on port 4000`));

