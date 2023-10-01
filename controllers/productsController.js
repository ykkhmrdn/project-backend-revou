// const { pool } = require('../config/databases')
// const productService = require('../services/productsService')

// const getAllProduct = async (req, res) => {
//    const product = await productService.getAllProduct()
//    res.status(200).json({
//     message: "Sukses mengirim data",
//     data: product
//    })
// }

// module.exports = { getAllProduct }

async function getProducts(req, res) {
   console.log('masuk ke path /');

   res.json({ name: 'TES'});
 }

 module.exports = {
   getProducts
 };