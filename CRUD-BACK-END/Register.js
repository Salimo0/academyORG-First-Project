const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    confirmpassword: String,
});

const RegisterModel = mongoose.model('register', RegisterSchema);

module.exports = RegisterModel;
