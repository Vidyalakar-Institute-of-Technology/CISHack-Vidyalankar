const mongoose = require("mongoose");

const conn = require('../config/dbconnection');

const hospitalSchema = new mongoose.Schema ({
    hospitalname : {
        type: String,
        required: true
    },
    hospitalphone : {
        type: String,
        required: true,
        unique: true
    },
    hospitaladdress : {
        type: String,
        required: true
    }
});

let Hospital = conn.hospitalDB.model('Hospital', hospitalSchema);

module.exports = Hospital;
