const sequelize = require("../util/database");
const IdCard = require("./id_card");

module.exports = class DataCollector {
  constructor() {
  }
  indexData(cb) {
    cb("this return index data");
  }

  idCardData(rollno, name, dob, address, email) {
    // IdCard.create({
    //   college_id: 1001,
    //   roll_no: rollno,
    //   name: name,
    //   dob: dob,
    //   address: address,
    //   email:email,
    //   photo: "testing",
    //   designation: "testing",
    //   blood_group: "testing",
    // });
    console.log("success");
    // need to add id number return here
  }
};
