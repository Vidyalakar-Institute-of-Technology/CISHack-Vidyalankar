const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const mongoose = require("mongoose");

const userRouter = express.Router();

const User = require('../models/book');


const u1 = new User({
  firstname: "Dikshita",
  lastname: "Kambri",
  phone: "1234567890",
  email: "dikshita@123.com",
  city: "Mumbai",
  State: "Maharashtra",
  Adhar:"468586161616"
});

const u2 = new User({
  firstname: "Bhargav",
  lastname: "Joshi",
  phone: "1234567890",
  email: "bhargav@123.com",
  city: "Mumbai",
  State: "Maharashtra",
  Adhar:"668586161616"
});
const u3 = new User({
  firstname: "Manasi",
  lastname: "Deshpande",
  phone: "2345678960",
  email: "manasi@123.com",
  city: "Mumbai",
  State: "Maharashtra",
  Adhar:"748326161616"
});
const u4 = new User({
  firstname: "Sumit",
  lastname: "Jadhav",
  phone: "2345678960",
  email: "sumit@123.com",
  city: "Mumbai",
  State: "Maharashtra",
  Adhar:"980756161616"
});
const u5 = new User({
  firstname: "Aishwarya",
  lastname: "Mohan",
  phone: "2345678960",
  email: "aishwarya@123.com",
  city: "Mumbai",
  State: "Maharashtra",
  Adhar:"734897561616"
});

const addedUsers = [u1, u2, u3, u4 ,u5];

  //   User route

userRouter.route("/")
.get((req, res) => {
    User.find({}, (err, foundItems) =>{

        if(foundItems.length === 0)
        {
          User.insertMany(addedUsers, (err)=>{
            if(err){
              console.log(err);
            }
            else {
              console.log("Added Default Users!");
            }
          });
          res.redirect("Users");
  
        } else {
          res.render("Users", {users: addedUsers});
        }
    });
});

module.exports = userRouter;
