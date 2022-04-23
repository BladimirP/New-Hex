const express = require('express');
const servicios = require('../services/queries');
const router = express.Router();


router.get('/ejes', async (req, res, next) => {
    try {
        res.json(await servicios.getEjes());
    } catch (err) {
        console.error(`Error while getting ejes`, err.message);
        next(err);
    }
});

router.get('/indicadores/:eje', async (req, res, next) => {
    const { eje } = req.params;
    try {
        res.json(await servicios.getIndicadorByEje(eje));
    } catch (err) {
        console.error(`Error while getting indicador`, err.message);
        next(err);
    }
});

module.exports = router