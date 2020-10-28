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
    },
    redirectCount: {
        type: Number,
        required: false,
    }
});

module.exports = mongoose.model('URLS', urlEntitySchema);