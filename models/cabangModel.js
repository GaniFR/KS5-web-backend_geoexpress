const Sequelize = require('sequelize');
const db = require('../config/database');
const { DataTypes } = Sequelize;
 
const Product = db.define('table_cabang',{
    id_table_cabang:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_cabang:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: true
    },
    nama_cabang:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    },
    lokasi:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    }
});
 
module.exports = Product;