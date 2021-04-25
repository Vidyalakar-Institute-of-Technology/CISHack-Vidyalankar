const mongoose = require("mongoose");

require('../config/dbconnection');

const userSchema = new mongoose.Schema ({
    firstname : {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    phone : {
        type: String,
        required: true,
        unique: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    dob : {
        type: String
    },
    city : {
        type: String,
        required: true
    },
    State : {
        type: String,
        required: true,
    },
    Adhar : {
        type: String,
        required: true,
        unique: true
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
