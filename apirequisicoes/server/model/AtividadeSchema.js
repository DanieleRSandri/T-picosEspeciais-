const mongoose = require("mongoose");

const AtividadeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    status: { type: String, required: true },
    prazo: { type: Date, default: Date.now },
    agendaInicio: { type: Date, default: Date.now },
    dataHoraTermino: { type: Date, default: Date.now },
       requisicao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Requisicao',
        require: true,
    },
    colaborador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Colaborador',
        require: false,
    },

       
});

module.exports = mongoose.model("Atividade", AtividadeSchema);