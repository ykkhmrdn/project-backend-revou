const express = require('express');
const { productController } = require('../controllers');
const router = express.Router();


router.get('/products', productController.getProducts);


module.exports = router;