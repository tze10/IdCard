const sequelize = require("../util/database");
const IdCard = require("./id_card");

module.exports = class DataDisplay {
  constructor(){}
  
  displayIdCards(){
      IdCard.findAll().then(result=>{
       return result;
      }).catch(err=>console.log(err));
    }
}