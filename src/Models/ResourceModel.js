const mongoose = require('mongoose');

const Resource = new mongoose.model('Resource',{
    name: {type: String, unique: true},
    description: String,
    location: { type: String, optional: true }
});

module.exports = Resource;