const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const mongoose = require("mongoose");

const HospitalRouter = express.Router();

const Hospital = require('../models/hospital');

const H1 = new Hospital({
    hospitalname: "Asian Heart Institute",
    hospitaladdress: "Bandra-Kurla Complex",
    hospitalphone: "1234567890"
});

const H2 = new Hospital({
    hospitalname: "Bhabha Hospital",
    hospitaladdress: "Bandra",
    hospitalphone: "666666666"
});
const H3 = new Hospital({
  hospitalname: "Bhaktivedanta Hospital",
  hospitaladdress: "Mira Road",
  hospitalphone: "518658756787"
});
const H4 = new Hospital({
  hospitalname: "Bombay Hospital",
  hospitaladdress: "Marine Lines",
  hospitalphone: "75837584783"
});
const H5 = new Hospital({
  hospitalname: "Cloudnine Hospitals",
  hospitaladdress: "Link Road, Malad West",
  hospitalphone: "67465835989"
});

const addedHospitals = [H1, H2, H3, H4, H5];

  //   Hospital route
HospitalRouter.route("/")
  .get((req, res) => {
      Hospital.find({}, (err, foundItems) =>{
  
          if(foundItems.length === 0)
          {
            Hospital.insertMany(addedHospitals, (err)=>{
              if(err){
                console.log(err);
              }
              else {
                console.log("Added Default Hospitals!");
              }
            });
            res.redirect("Hospital-list");
    
          } else {
            res.render("Hospital-list", {hospitals: addedHospitals});
          }
      });
  });
  
module.exports = HospitalRouter;
