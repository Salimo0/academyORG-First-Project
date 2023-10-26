const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    age: Number,
    email: String,
    message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
