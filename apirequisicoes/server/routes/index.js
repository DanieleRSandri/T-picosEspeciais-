const { Router } = require("express");
const routes = Router();

// Liberar origens para requisições
var cors = require('cors');
routes.use(cors({origin: '*'}));
//routes.use(cors({origin: 'http://localhost:3001'}));

//cada programa tera uma entrada em routes
const colaboradorRout = require("./ColaboradorRout");
routes.use("/api", colaboradorRout);

module.exports = routes;