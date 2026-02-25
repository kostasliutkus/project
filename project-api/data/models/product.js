const { DataTypes } = require('sequelize');

const Product = {
    name: DataTypes.STRING,
    cashback_val: DataTypes.FLOAT,
    platform: DataTypes.STRING,
    like_count: DataTypes.INTEGER,
    region: DataTypes.STRING,
    photo: DataTypes.STRING,
    price_euro: DataTypes.FLOAT
};

module.exports = (sequelize) => sequelize.define('product',Product);