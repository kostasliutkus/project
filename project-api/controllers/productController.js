const express = require('express');
// const { DataTypes } = require('sequelize');

const sequelize = require('../data/db')
const router = express.Router();

const defineProduct = require('../data/models/product')

const Product = defineProduct(sequelize)

sequelize.sync().then(()=> {
    console.log('Database and product table are synced');
})
.catch((error) => {
    console.error('Error syncing database:',error);
})

const products = [ 
      { id : 1, name : "First Product"},
      { id : 2, name : "Second Product"},
      { id : 3, name : "Third Product"}
];

// get by id
router.get('/products/:id', (req, res) => {
  const product = products.find(p =>p.id===parseInt(req.params.id));

  if(!product) return res.status(404).send("Product not found");
  
  res.send(product);
});

//get all
router.get('/products', async (req, res) => {
    try {
        const products = await Product.findAll();
        console.log(products);
        if(products.length == 0) return res.status(404).json("There are no currently available products") 
        res.json(products)
    } catch (error) {
        console.error('Error fetching products:',error);
        res.status(500).json({error: "Internal Server Error"})
    }
});

module.exports = router;