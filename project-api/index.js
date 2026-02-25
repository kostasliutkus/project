require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors')

const app = express();

const productController = require('./controllers/productController');

const corsOptions = {
  origin: "http://localhost:5173",
  optionSuccessStatus: 200
}

app.use(bodyParser.json());
app.use(cors(corsOptions));

const seedProducts = require('./data/seedDatabase')

seedProducts()
// sequelize
app.use('/api', productController);


app.get('/', (req, res) => {
  res.send(`Server is running`);
});

const PORT = process.env.PORT || 6800;

app.listen(PORT, () => {
   console.log(`Server running port: ${PORT}`);
})