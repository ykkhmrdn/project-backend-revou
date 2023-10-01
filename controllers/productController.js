const { productService } = require('../services');

async function getProducts(req, res) {
  const products = await productService.getAllProducts();

   res.status(200).json(products);
 }

 module.exports = {
   getProducts
 };