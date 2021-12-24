const IdCard = require("../models/id_card");

const DataCollector = require("../models/dataCollection");
const dataCollector = new DataCollector();

exports.indexPage = (req, res, next) => {
  dataCollector.indexData((result) => {
    res.render("index", { result: result });
  });
};

exports.formsPage = (req, res, next) =>{
    res.render('form')
}

exports.idCardsPage = (req, res, next) =>{
  
  IdCard.findAll({
    where:{
      name: req.params.name,
    }
  }).then(ids=>{
    res.render('id-cards',{ids: ids});
  })
}

// exports.idCardsPage = (req, res) =>{
//   console.log(req.params.name)
//  IdCard.findByPk('ashok').then(ids =>{
//    const idsName = ids.name;
//    console.log(idsName)
//    res.render('id-cards',{ids: ids})
//  });
// }

exports.formData = (req, res, next) => {
  const rollno = req.body.rollNo;
  const name = req.body.firstName;
  const dob = req.body.dob;
  const address = req.body.address;
  const email = req.body.email;
  // const databaseReturn = dataCollector.idCardData(rollno, name, dob, address, email);
  res.render('id-image');
};


exports.imageUpload = (req, res, next) =>{
  // IdCard.findAll({
  //   where: {
  //     name: 'ashok'
  //   }
  // })
  // if(imageUpload){
  //   res.redirect('/');
  // }
 res.redirect('/');
}

const multer  = require('multer')
const storage = multer.diskStorage({
    destination: 'data/',
    filename: (req, file, cb)=>{
        
        cb(null, file.originalname)
    }
    });
 upload = multer({ storage: storage });

exports.uploadImage = upload.single('imgUpload');