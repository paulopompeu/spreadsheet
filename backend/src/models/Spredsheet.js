const mongoose = require('mongoose');

const SheetSchema = new mongoose.Schema({
    id: Number,
    Tabela: String,
});

module.exports = mongoose.model('Sheet', SheetSchema);