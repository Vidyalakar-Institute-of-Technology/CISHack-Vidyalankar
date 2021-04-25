const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const mongoose = require("mongoose");

const HospitalRegisterRouter = express.Router();

const Hospital = require('../models/hospital');

// Hospital-registration route

HospitalRegisterRouter.route("/")
.get((req, res) => {
    res.render("Hospital-registration");
})
.post((req, res) => {
    const hname = req.body.name;
    const hphone = req.body.phone;
    const email = req.body.emailid;
    const date = req.body.date;
    const haddress = req.body.address;
    const city = req.body.city;
    const state = req.body.state;

    const newhospital = new Hospital({
        hospitalname: hname,
        hospitalphone: hphone,
        hospitaladdress:haddress
    });

    addedHospitals.push(newhospital);
      newhospital.save((err) => {
          if(err){
              console.log(err);
          }else{
              console.log("Hospital added successfully");
              res.render("/");
          }
      });
});

module.exports = HospitalRegisterRouter;