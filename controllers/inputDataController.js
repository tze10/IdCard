const DataCollector = require('../models/data');

exports.getIndexPage = (req,res,next)=>{
   const dataCollector = new DataCollector();
    dataCollector.getIndexData((result) =>{
        res.render('index',{result: result});
    })
}