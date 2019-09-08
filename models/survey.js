const mongoose = require('mongoose');
const { Schema } = mongoose;

const newSurvey = new Schema({
    tamanoEmpresa: {type: String, default: "notier?"},
    tipoEmpresa: {type: Object, default: "nokind?"},
    divulgacion: {type: String, default: "noreason?"},
    mercadoObjetivo: {type: Object, default: "nomarket?"},
    manejaMarca: {type: String, default: "nobrand?"},
    serviciosUtiles: {type: String, default: "noservices?"},
    vendriaDeNuevo: {type: String, default: "maybe?"},
    razonParaVolverOno: {type: String, default: "noreasoneither?"}
});

module.exports = mongoose.model('encuesta', newSurvey);