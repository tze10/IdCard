const express = require('express');
const app = express();
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

const sequelize = require('./util/database');
const IdCard = require('./models/id_card');

const routes = require('./routing/routes');

app.use(routes);

sequelize.sync().then((result)=>{
    return IdCard.findByPk(1);
}).then((idCard)=>{
    if(!idCard){
        return IdCard.create({college_id:"4567", roll_no: 51,name:"ashok kumar", dob:"15-11-1996", address:"1576 amapola Ny NY", photo:"url pasted here",designation: "COO", blood_group: "B+"});
    }
    return Promise.resolve(idCard);
}).then((idCard)=>{
    console.log(idCard);
    app.listen(3000);
}).catch((err)=>{
    console.log(err);
})
