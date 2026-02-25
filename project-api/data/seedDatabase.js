const sequelize = require('./db')

const defineProduct = require('../data/models/product')

const Product = defineProduct(sequelize)

const products = [ 
      { name : "Split Fiction",cashback_val: 4.50,platform: "Steam", like_count: 223,region: "GLOBAL", photo: "./assets/images/fifa-23-thumbnail.jpg", price_euro: 40.93},
      { name : "Read Dead Redemption 2",cashback_val: 5.50, platform: "Xbox Live", like_count: 733, region: "EUROPE", photo: "./assets/images/read-dead-redemption-2-thumbnail.jpg", price_euro: 33.9},
      { name : "FIFA 23",cashback_val: 0.00, platform: "Nintendo", like_count: 185, region: "GLOBAL", photo: "./assets/images/split-fiction-thumbnail.jpg", price_euro: 37.88}
];

async function seedProducts() {
    try {
        const curr_prod_list = await Product.findAll({limit: 1});
        if(curr_prod_list !=null && curr_prod_list.length != 0)
        {
            return console.log("Database is not empty. Skipping seeding ...")
        }
        const productsToAdd = await Product.bulkCreate(products);
        console.log(productsToAdd, "Product data seeding completed successfully")
    } catch (error) {
        console.error(error)
    }
}

module.exports = seedProducts;