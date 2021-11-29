const express = require('express');
const router = express.Router();

const inputDataController = require('../controllers/inputDataController');

router.get('/', inputDataController.getIndexPage);

module.exports = router;