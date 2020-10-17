const mongoose = require('mongoose');

const urlEntitySchema = new mongoose.Schema({
    uniqueId: {
        type: String,
        required: true,
    },
    targetUrl: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('URLS', urlEntitySchema);