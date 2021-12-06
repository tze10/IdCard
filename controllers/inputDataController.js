const DataCollector = require("../models/data");
const dataCollector = new DataCollector();

exports.getIndexPage = (req, res, next) => {
  dataCollector.getIndexData((result) => {
    res.render("index", { result: result });
  });
};

exports.postFormData = (req, res, next) => {
  const rollno = req.body.rollNo;
  const name = req.body.firstName;
  const dob = req.body.dob;
  const address = req.body.address;
  const email = req.body.email;
  const imageUpload = req.body.imgUpload;
  console.log(imageUpload);
  dataCollector.postIdCardData(rollno, name, dob, address, email);
  res.redirect("/");
};
