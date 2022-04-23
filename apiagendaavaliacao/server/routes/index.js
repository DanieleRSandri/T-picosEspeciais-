const { Router } = require("express");
const routes = Router();

// Liberar origens para requisições
var cors = require('cors');
routes.use(cors({origin: '*'}));
//routes.use(cors({origin: 'http://localhost:3001'}));

//cada programa tera uma entrada em routes
const agendaRout = require("./AgendaRout");
routes.use("/api", agendaRout);

module.exports = routes;