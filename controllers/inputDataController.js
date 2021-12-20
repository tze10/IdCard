
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
      name: 'ashok Kumar'
    }
  }).then(ids=>{
    res.render('id-cards',{ids: ids});
  })
}

exports.formData = (req, res, next) => {
  const rollno = req.body.rollNo;
  const name = req.body.firstName;
  const dob = req.body.dob;
  const address = req.body.address;
  const email = req.body.email;
  const imageUpload = req.file;
  console.log(imageUpload);
  dataCollector.idCardData(rollno, name, dob, address, email);
  res.redirect("/");
};


exports.imageUpload = (req, res, next) =>{
  const imageUpload = req.file
  if(imageUpload){
    res.redirect('/');
  }
}