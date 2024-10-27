const mongoose = require('mongoose');

const ColorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    hex: {
        type: String,
        required: true,
        unique: true
    },
    red:{
        type: Number,
        required: true
    },
    green:{
        type: Number,
        required: true
    },
    blue:{
        type: Number,
        required: true
    }
});

const Color = mongoose.model('Color', ColorSchema);

module.exports = Color;