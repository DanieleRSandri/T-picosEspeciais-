const mongoose = require("mongoose");

const uri = "mongodb://admin:admin@localhost:27017/baseagendaavaliacao?authSource=baseagendaavaliacao";

mongoose.connect(uri, { } );

