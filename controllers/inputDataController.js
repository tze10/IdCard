const DataDisplay = require("../models/dataDisplay");
const IdCard = require("../models/id_card");

const DataCollector = require("../models/dataCollection");
const dataCollector = new DataCollector();

exports.getIndexPage = (req, res, next) => {
  dataCollector.indexData((result) => {
    res.render("index", { result: result });
  });
};

exports.getFormsPage = (req, res, next) =>{
    res.render('form')
}

exports.getIdCardsPage = (req, res, next) =>{
  //  const dataDisplay = new DataDisplay();
  //  dataDisplay.displayIdCards();
  IdCard.findAll({
    where:{
      name: 'ashok Kumar'
    }
  }).then(ids=>{
    res.render('id-cards',{ids: ids});
  })
}

exports.postFormData = (req, res, next) => {
  const rollno = req.body.rollNo;
  const name = req.body.firstName;
  const dob = req.body.dob;
  const address = req.body.address;
  const email = req.body.email;
  const imageUpload = req.body.imgUpload;
  console.log(imageUpload);
  dataCollector.idCardData(rollno, name, dob, address, email);
  res.redirect("/");
};
