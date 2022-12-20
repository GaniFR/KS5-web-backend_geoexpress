const express = require('express');
const session = require('express-session');
const cors = require('cors');
const {json} = require('sequelize');
const mysql = require('mysql');
const app = express();
const port = 3000;

const dotenv = require('dotenv');
const passport = require('passport');
const db = require('./config/database');
const cabangModel = require('./models/cabangModel');

try{
    db.authenticate();
    console.log("succes");
    cabangModel.sync();
} catch (error){
    console.log(error);
}

dotenv.config();

const connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'Test1',
    password: 'kpL27Iac99',
    database: 'app_ekspedisi'
});

app.use(cors());
app.use('/static', express.static("public"));
app.use(express.json());

app.use('/cabang', require('./routes/cabang'));

app.use(express.urlencoded({extended:true}))
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true,
    cookie:{
        httpOnly:true
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req,res, next)=>{
    res.locals.user = req.user
    next();
})

app.listen(port, ()=>{
    console.log('Server is running on port' + port);
})