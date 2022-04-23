const mongoose = require("mongoose");

const AgendaSchema = new mongoose.Schema({
    usuario: { type: String, required: true },
    status: { type: String, required: true },
    quadra : { type: String, required: true },
    data: { type: Date, default: Date.now },
    tempo:  { type: String, required: true },
    local: { type: String, required: true },
});

module.exports = mongoose.model("Agenda", AgendaSchema);