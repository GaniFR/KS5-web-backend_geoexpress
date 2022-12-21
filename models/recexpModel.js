const Sequelize = require('sequelize');
const db = require('../config/database');
const { DataTypes } = Sequelize;
 
const Product = db.define('rec_exp',{
    id_rec_exp:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_barang:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: true
    },
    nama_cabang_sebelum:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    },
    id_admin:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: true
    },
    nama_admin:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    },
    waktu_penerimaan:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    },
    resi:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: true
    },
    id_ekspedisi:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: true
    }
});
 
module.exports = Product;