const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const IdCard = sequelize.define('idCard',{
    id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    },
    college_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    roll_no: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dob: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    photo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    designation: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    blood_group: {
        type: Sequelize.STRING,
        allowNull: true,
    },
});

module.exports = IdCard;