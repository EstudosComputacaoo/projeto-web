const Product = require('../models/products')

async function getProducts(){
    return Product.find({}).lean()
}

module.exports = getProducts