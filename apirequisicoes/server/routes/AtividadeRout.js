//http://localhost:3000/api/atividade


const express = require('express');
const routes = express.Router();
const controle = require('../controller/AtividadeCont');

//aqui todos os endpoint possiveis para o programa
routes.route('/atividade').get(controle.listar);
routes.route('/atividade').post(controle.incluir);
routes.route('/atividade').put(controle.alterar);
routes.route('/atividade/:id').delete(controle.excluir);
routes.route('/atividade/:id').get(controle.obterPeloId);
routes.route('/atividade/filtro/:filtro').get(controle.filtrar);

module.exports = routes;