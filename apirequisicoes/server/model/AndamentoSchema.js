const mongoose = require("mongoose");

const AndamentoSchema = new mongoose.Schema({
    dataHora: { type: Date, default: Date.now },
    titulo: { type: String, required: true },
    descricao: { type: String, required: true, unique: true },
    colaborador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Colaborador',
        require: true,
    },
    atividade: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Atividade',
        require: true,
    },

       
});

module.exports = mongoose.model("Andamento", AndamentoSchema);