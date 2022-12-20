const Sequelize = require('sequelize');
 
const db = new Sequelize('app_ekspedisi', 'Test1', 'kpL27Iac99', {
    host: "localhost",
    dialect: "mysql"
});
 
module.exports = db;