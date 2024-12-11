const mongoose = require('mongoose');

const Resource = new mongoose.model('Resource',{
    name: {type: String, unique: true},
    description: { type: String, optional: true },
    location: { type: String }
});

module.exports = Resource;