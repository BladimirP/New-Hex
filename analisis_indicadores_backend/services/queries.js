const db = require('./db');

const getEjes = async ( ) => {
    const rows = await db.query(
        'SELECT nombre, porcentaje_completado FROM eje'
    );
    return (!rows) ? [] : rows;
};

const getIndicadorByEje = async ( eje ) => {
  const rows = await db.query(
    `SELECT nombre, id, metrica FROM indicador WHERE nombre_eje = "${eje}"`
  );

  return (!rows) ? [] : rows;
};

module.exports = {
  getIndicadorByEje,
  getEjes
}