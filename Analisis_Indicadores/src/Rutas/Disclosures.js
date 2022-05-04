import React,{useState} from 'react'
import Table from 'react-bootstrap/Table'

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
      <Table bordered striped>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Investigador Principal</th>
            <th colSpan="5">El resultado se logró producto de financiamiento de:</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <th >AÑO</th>
            <th scope='col'>ID Disclosure</th>
            <th scope='col'>Nombre de resultado tecnológico</th>
            <th>Nombre y apellido</th>
            <th>Fondos Públicos</th>
            <th>Fondos Propios</th>
            <th>Fondos Privados</th>
            <th>Fondos ONG</th>
            <th>Fondos Internacionales</th>
            <th>FUENTE DE INFORMACIÓN</th>
            <th>CARGO AUTORIDAD QUE VALIDA INFORMACIÓN </th>
            <th>NOMBRE AUTORIDAD QUE VALIDA INFORMACIÓN </th>
          </tr>
        </thead>
        <tbody>
            {valoresApi.map((valor,Index) => {
              return(
                <>
                <tr className="disclosures" key={Index}>
                  {valor.map((valores) => {
                    return (
                    <td >{valores == "NULL" ? "" : valores}</td>
                    )
                  })}
                </tr>
              
                </>
              )
            })}
        </tbody>
      </Table>
    </div>
  )
}

export default Disclosures