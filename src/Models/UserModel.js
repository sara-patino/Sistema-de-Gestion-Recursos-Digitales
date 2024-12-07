const mongoose = require('mongoose');

const User = new mongoose.model('User',{
    email: {type: String, unique: true},
    password: String
});

module.exports = User;
