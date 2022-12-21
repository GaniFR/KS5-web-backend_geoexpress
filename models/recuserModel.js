const Sequelize = require('sequelize');
const db = require('../config/database');
const { DataTypes } = Sequelize;
 
const Product = db.define('rec_user',{
    id_rec_user:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_barang:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: true
    },
    nama_barang:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    },
    nama_cabang_asal:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    },
    nama_pengirim:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    },
    nama_penerima:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    },
    kota:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    },
    alamat:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    },
    waktu_penerimaan:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    },
    resi_barang:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: true
    }
});
 
module.exports = Product;