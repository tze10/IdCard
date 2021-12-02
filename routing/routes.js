const express = require('express');
const router = express.Router();

const inputDataController = require('../controllers/inputDataController');

//Get Methods
router.get('/', inputDataController.getIndexPage);
router.get('/form', (req,res,next)=>{
    res.render('form');
})

//Post Methods
router.post('/id-value',inputDataController.postFormData);

module.exports = router;