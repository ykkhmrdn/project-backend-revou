const express = require('express')
const formRoute = express.Router();
const formController = require('../controllers/formController')
// const { pool } = require('../config/databases')


formRoute.get('/', formController.getAllForm)
formRoute.post('/', formController.createForm)
// productRoute.post('/products', productController.createProducts)

module.exports = { formRoute }