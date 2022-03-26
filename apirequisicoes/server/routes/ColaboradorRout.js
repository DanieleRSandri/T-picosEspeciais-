//http://localhost:3000/api/colaboradores


const express = require('express');
const routes = express.Router();
const controle = require('../controller/ColaboradorCont');

//aqui todos os endpoint possiveis para o programa
routes.route('/colaboradores').get(controle.listar);
routes.route('/colaboradores').post(controle.incluir);
routes.route('/colaboradores').put(controle.alterar);
routes.route('/colaboradores/:id').delete(controle.excluir);
routes.route('/colaboradores/:id').get(controle.obterPeloId);
routes.route('/colaboradores/filtro/:filtro').get(controle.filtrar);

module.exports = routes;