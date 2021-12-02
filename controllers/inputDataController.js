const DataCollector = require('../models/data');

exports.getIndexPage = (req,res,next)=>{
   const dataCollector = new DataCollector();
    dataCollector.getIndexData((result) =>{
        res.render('index',{result: result});
    })
}

exports.postFormData = (req,res,next)=>{

    const email = req.body.email;
    console.log(email);
    res.redirect('/');
}