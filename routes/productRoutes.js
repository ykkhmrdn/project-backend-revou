const express = require('express')
const productRoute = express.Router();
const productController = require('../controllers/productsController')

productRoute.get('/products', productController.getAllProduct)


module.exports = { productRoute }