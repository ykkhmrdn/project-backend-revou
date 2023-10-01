const express = require('express')
const { aboutController } = require('../controllers');
const router = express.Router();


router.get('/about', aboutController.getTeam);

module.exports = router;