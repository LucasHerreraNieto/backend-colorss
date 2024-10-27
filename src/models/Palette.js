const  mongoose = require('mongoose');

const PaletteSchema = new mongoose.Schema({
    colors : [Color]
});

const Palette = mongoose.model('Palette', PaletteSchema);

module.exports = Palette;
