const { Router } = require("express");
const routes = Router();

// Liberar origens para requisições
var cors = require('cors');
routes.use(cors({origin: '*'}));
//routes.use(cors({origin: 'http://localhost:3001'}));

//cada programa tera uma entrada em routes
const colaboradorRout = require("./ColaboradorRout");
routes.use("/api", colaboradorRout);

const solicitanteRout = require("./SolicitanteRout");
routes.use("/api", solicitanteRout);

const tipoRequisicaoRout = require("./TipoRequisicaoRout");
routes.use("/api", tipoRequisicaoRout);

const andamentoRout = require("./AndamentoRout");
routes.use("/api", andamentoRout);

const atividadeRout = require("./AtividadeRout");
routes.use("/api", atividadeRout);

const requisicaoRout = require("./RequisicaoRout");
routes.use("/api", requisicaoRout);

module.exports = routes;