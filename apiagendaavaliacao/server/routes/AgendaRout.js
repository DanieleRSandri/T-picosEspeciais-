//http://localhost:3000/api/agenda


const express = require('express');
const routes = express.Router();
const controle = require('../controller/AgendaCont');

//aqui todos os endpoint possiveis para o programa
routes.route('/agenda').get(controle.listar);
routes.route('/agenda').post(controle.incluir);
routes.route('/agenda').put(controle.alterar);
routes.route('/agenda/:id').delete(controle.excluir);
routes.route('/agenda/:id').get(controle.obterPeloId);
routes.route('/agenda/filtro/:filtro').get(controle.filtrar);

module.exports = routes;