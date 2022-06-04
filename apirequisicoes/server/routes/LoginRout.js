const express = require('express');
const routes = express.Router();
const controle = require('../controller/LoginCont');

//aqui todos os endpoint possiveis para o programa
routes.route('/login').post(controle.login);
routes.route('/logout').post(controle.logout);

module.exports = routes;