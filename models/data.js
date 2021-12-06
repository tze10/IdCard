const sequelize = require("../util/database");
const IdCard = require("../models/id_card");

module.exports = class DataCollector {
  constructor() {
  }
  getIndexData(cb) {
    cb("this return index data");
  }

  postIdCardData(rollno, name, dob, address, email) {
    // IdCard.create({
    //   college_id: 1001,
    //   roll_no: rollno,
    //   name: name,
    //   dob: dob,
    //   address: address,
    //   photo: "testing",
    //   designation: "testing",
    //   blood_group: "testing",
    // });
  }
};
