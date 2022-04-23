const AgendaAvaliacao = require('../model/AgendaAvaliacaoSchema');

module.exports = {

    listar: async (req, res) => {
        AgendaAvaliacao.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).sort({ nome: 1 }); // -1 decrescente 1 crescente
    },

    incluir: async (req, res) => {
        let obj = new AgendaAvaliacao(req.body);
        obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    alterar: async (req, res) => {
        let obj = new AgendaAvaliacao(req.body);
        AgendaAvaliacao.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    excluir: async (req, res) => {
        AgendaAvaliacao.deleteOne({ _id: req.params.id }, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json("message:ok"));
        });
    },

    obterPeloId: async (req, res) => {
         AgendaAvaliacao.findOne({ _id: req.params.id }, function (err,obj) {
            if (err)
                res.status(400).send(err);
                res.status(200).json(obj);
        });
        
    },

    filtrar: async (req, res) => {
     AgendaAvaliacao.find({
            $or: [
                { usuario: { $regex: req.params.filtro, $options: "i" } },
                { status: { $regex: req.params.filtro, $options: "i" } },
            ],
        }, function (err,objetos) {
            if (err)
                res.status(400).send(err);
                 res.json(objetos);
        }).sort({ nome: -1 }); // -1 decrescente 1 crescente
       
    },


};