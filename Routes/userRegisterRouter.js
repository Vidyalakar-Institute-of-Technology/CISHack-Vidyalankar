const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const mongoose = require("mongoose");

const userRegisterRouter = express.Router();

const User = require('../models/book');

const u1 = new User({
    firstname: "Dikshita Kambri",
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
  
  const addedUsers = [u1, u2];

// Users-registration route

userRegisterRouter.route("/")
.get((req, res) => {
    res.render("Vaccine_registration");
})
.post((req, res) => {
    const fname = req.body.firstname;
    const lname = req.body.lastname;
    const phone = req.body.phone;
    const adhar = req.body.Adhar;
    const email = req.body.emailid;
    const date = req.body.date;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zipcode = req.body.lastname;

    const newu = new User({
        firstname: fname,
        lastname: lname,
        phone: phone,
        email: email,
        city: city,
        State: state,
        Adhar:adhar
      });
      addedUsers.push(newu);
      newu.save((err) => {
          if(err){
              console.log(err);
          }else{
              console.log("User added successfully");
              res.render("Appointment-form");
          }
      });
});

module.exports = userRegisterRouter;