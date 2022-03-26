//http://localhost:3000/api/solicitante


const express = require('express');
const routes = express.Router();
const controle = require('../controller/SolicitanteCont');

//aqui todos os endpoint possiveis para o programa
routes.route('/solicitante').get(controle.listar);
routes.route('/solicitante').post(controle.incluir);
routes.route('/solicitante').put(controle.alterar);
routes.route('/solicitante/:id').delete(controle.excluir);
routes.route('/solicitante/:id').get(controle.obterPeloId);
routes.route('/solicitante/filtro/:filtro').get(controle.filtrar);

module.exports = routes;