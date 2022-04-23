//http://localhost:3000/api/agendaAvaliacao


const express = require('express');
const routes = express.Router();
const controle = require('../controller/AgendaAvaliacaoCont');

//aqui todos os endpoint possiveis para o programa
routes.route('/agendaAvaliacao').get(controle.listar);
routes.route('/agendaAvaliacao').post(controle.incluir);
routes.route('/agendaAvaliacao').put(controle.alterar);
routes.route('/agendaAvaliacao/:id').delete(controle.excluir);
routes.route('/agendaAvaliacao/:id').get(controle.obterPeloId);
routes.route('/agendaAvaliacao/filtro/:filtro').get(controle.filtrar);

module.exports = routes;