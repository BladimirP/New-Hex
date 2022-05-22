import React,{useState} from 'react'
import { ExcelDoble } from '../Components/FactoryExcel'

const valoresApi = [
  [1, 2017, '016-2017', '(WWF) INICIATIVA DE TECNOLOGÍA SOCIAL PARA EL MONITOREO COLABORATIVO DE LA FAUNA MARINA EN LA REGION DE LOS LAGOS, ORIENTADO A CONSERVACIÓN, TURISMO Y EDUCACIÓN', 'Gustavo Schleyer', 'X', 'NULL', 'NULL', 'NULL', 'NULL', 'OTL', 'DIRECTOR', 'Germán Rehren'],
  [2, 2017, '015-2017', 'Sistema de Medición acústico para Smartphone', 'Enríque Suarez', 'NULL', 'X', 'NULL', 'NULL', 'NULL', 'OTL', 'DIRECTOR', 'Germán Rehren'],
  [3, 2017, '014-2017', 'Diseño de una nueva mezcla asfáltica para capa de rodadura utilizando residuos de la producción de la celulosa', 'Diana Movilla y Aitor Raposeiras', 'X', 'NULL', 'X', 'NULL', 'NULL', 'OTL', 'DIRECTOR', 'Germán Rehren'],
  [4, 2017, '011-2017', 'MyBio3D: Planeamiento de la cirugia con impresión 3D', 'Guillaume Serandour', 'X', 'NULL', 'NULL', 'NULL', 'NULL', 'OTL', 'DIRECTOR', 'Germán Rehren'],
  [5, 2017, '007-2017', 'Sistema de manejo de energías renovables para la industria Salmonera', 'Gonzalo Tampier', 'X', 'NULL', 'NULL', 'NULL', 'NULL', 'OTL', 'DIRECTOR', 'Germán Rehren'],

]

const Disclosures = () => {
  //const [datos2,setDatos] = useState(datos)
  return (
    <div>
      <ExcelDoble valoresApi={valoresApi} clase={"tablasFijas"}/>
    </div>
  )
}

export default Disclosures