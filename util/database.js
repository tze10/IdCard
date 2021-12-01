const Sequelize = require('sequelize');

const sequelize = new Sequelize("id_cards","tze10","GanD@18berRunda",{
    dialect: "mysql",
    host:"localhost",
});

module.exports = sequelize;