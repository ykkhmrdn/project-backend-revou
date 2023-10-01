const express = require('express')
// const productRoutes = express.Router();
const { productController } = require('../controllers')
const router = express.Router();

// productRoutes.get('/products', productController.getAllProduct)

router.get('/products', productController.getProducts);


// module.exports = { productRoutes }

module.exports = router;