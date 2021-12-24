

const express = require('express');
const router = express.Router();

const inputDataController = require('../controllers/inputDataController');

//Get Methods
router.get('/', inputDataController.indexPage);
router.get('/form',inputDataController.formsPage);
router.get('/id-cards/:name', inputDataController.idCardsPage);

//Post Methods
router.post('/id-value', inputDataController.formData);
router.post('/img-upload',inputDataController.uploadImage,inputDataController.imageUpload);

module.exports = router;