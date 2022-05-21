const mongoose = require("mongoose");

const AtividadeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    status: { type: String, required: true },
    prazo: { type: Date, default: Date.now , required: true},
    agendaInicio: { type: Date, default: Date.now, required: true },
    dataHoraTermino: { type: Date, default: Date.now, required: true  },
       requisicao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Requisicao',
        //require: true,
    },
    colaborador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Colaborador',
        //require: false,
    },

       
});

module.exports = mongoose.model("Atividade", AtividadeSchema);