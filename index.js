const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

// Home route

app.route("/")
.get((req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Admin login route

app.route("/login")
.get((req, res) => {
    res.render("Admin-login");
})
.post((req, res) => {

    const email = req.body.email;
    const pass = req.body.password;
  
    if(email === "admin@bookmydose.com" && pass === "1234")
    {
      //console.log("Success!");
      res.sendFile(__dirname + "/public/Admin-dashboard.html");
    }
    else {
      res.sendFile(__dirname + "/public/login-failure.html")
      //console.log("Failure!");
    }
});

// Users-registration DB

const userRegisterRouter = require('./Routes/userRegisterRouter');
app.use('/register',userRegisterRouter);

//   User route

const userRouter = require('./Routes/userlistRouter');
app.use('/users', userRouter);

// Hospital-registration route

const HospitalRouter = require('./Routes/HospitallistRouter');
app.use('/hospital',HospitalRouter);

// Hospital route

const HospitalRegisterRouter = require('./Routes/HospitalRegisterRouter');
app.use('/hospital-registration',HospitalRegisterRouter);

app.listen(5000, function() {
    console.log("Server started on port 5000");
}); 

// "C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe" --dbpath="c:\data\db"