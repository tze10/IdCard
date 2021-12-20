const multer  = require('multer')
// const upload = multer({ dest: 'data/' })

var storage = multer.diskStorage({
    destination: 'data/',
    filename: (req, file, cb)=>{
        cb(null, file.originalname)
    }
    });
  
var upload = multer({ storage: storage });

const express = require('express');
const router = express.Router();

const inputDataController = require('../controllers/inputDataController');

//Get Methods
router.get('/', inputDataController.indexPage);
router.get('/form',inputDataController.formsPage);
router.get('/id-cards', inputDataController.idCardsPage);

//Post Methods
router.post('/id-value', inputDataController.formData);
router.post('/img-upload',upload.single('imgUpload'),inputDataController.imageUpload);

module.exports = router;