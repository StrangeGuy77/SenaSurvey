const router = require("express").Router();
const surveyModel = require('../models/survey');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/send', async (req, res) => {
    console.log(req.body);

    const newSurvey = new surveyModel({
        tamanoEmpresa: req.body.tamanoempresa,
        tipoEmpresa: req.body.tipoempresa,
        divulgacion: req.body.divulgacion,
        mercadoObjetivo: req.body.mercado,
        manejaMarca: req.body.marca,
        serviciosUtiles: req.body.servicios,
        vendriaDeNuevo: req.body.volveria,
        razonParaVolverOno: req.body.razon
    });

    const saveSurvey = await newSurvey.save().catch(reason => {
        console.log(`Error: ${reason}`);
      });

    res.redirect('/');

});

module.exports = router;