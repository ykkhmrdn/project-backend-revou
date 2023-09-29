const express = require('express')
const aboutRoute = express.Router();
const aboutController = require('../controllers/aboutController')

// const { pool } = require('../config/databases')


aboutRoute.get('/', aboutController.getAllAbout)
// formRoute.post('/', formController.createForm)
// productRoute.post('/products', productController.createProducts)

module.exports = { aboutRoute }