const multer  = require('multer')
const upload = multer({ dest: '../data' })

const express = require('express');
const router = express.Router();

const inputDataController = require('../controllers/inputDataController');

//Get Methods
router.get('/', inputDataController.getIndexPage);
router.get('/form',inputDataController.getFormsPage);
router.get('/id-cards', inputDataController.getIdCardsPage);

//Post Methods
router.post('/id-value',upload.single('imgUpload'), inputDataController.postFormData);

module.exports = router;