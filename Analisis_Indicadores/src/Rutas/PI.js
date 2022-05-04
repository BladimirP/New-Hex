import React,{useState} from 'react'
import Table from 'react-bootstrap/Table'

const datos = ['AÑO', 'Nº', 'Nombre (Titulo) de la Propiedad Industrial ', 'Número o código de solicitud', 'A.1. Tipo de Propiedad Industrial', 'Año solicitud de PI', 'Estado PI', 'País', 'Investigador Principal', 'Año disclosure', 'Licenciamiento (SI/NO)', 'Fecha del Contrato de Licenciamiento', 'Estado del Contrato', 'Fecha de Término de Contrato', 'B.1. Ingresos por pagos anticipados ($M)', 'B.2. Ingresos por cumplimiento de hitos ($M)', 'B.3. Ingresos por regalías ($M)', 'B.4. Otros Ingresos', 'B.5. Total Ingresos de la facultad por Licenciamiento ANUAL ($M)', 'D.1. Nombre del Licenciatario', 'D.2. Actividad Económica Licenciatario', 'D.3. Nacionalidad Licenciatario', 'D.4 ¿Es una spin-off / start-up de la Facultad?', 'E.1. Departamento', 'E.2. Unidad Responsable', 'E.3. Fuente de la Información', 'CARGO AUTORIDAD QUE VALIDA INFORMACIÓN ', 'NOMBRE AUTORIDAD QUE VALIDA INFORMACIÓN ']

const valoresApi = [
  [2017.0, 1.0, 'DonoSangre IOS', 282.48, 'Derecho de autor', 2017, 'Concedida', 'Chile', 'Christian Lazo', 2016, 'SI', '2017-06-05', 'Vigente', "2021-06-05", 0.0, 0.0, 0.0, 0.0, 0.0, 'Hospital Base Valdivia', 'Salud', 'Chile', 'No', 'NULL', 'FCI', 'OTL', 'Director', 'German Rehren'],
  [2017.0, 2.0, 'DonoSangre Android', 281298, 'Derecho de autor', 2017, 'Concedida', 'Chile', 'Christian Lazo', 2016, 'SI', '2017-06-05', 'Vigente', "2021-06-05", 0.0, 0.0, 0.0, 0.0, 0.0, 'Hospital Base Valdivia', 'Salud', 'Chile', 'No', 'NULL', 'FCI', 'OTL', 'Director', 'German Rehren'],
  [2017.0, 3.0, 'DonoSangre Dashboard', 278.635, 'Derecho de autor', 2017, 'Concedida', 'Chile', 'Christian Lazo', 2016, 'SI', '2017-06-05', 'Vigente', "2021-06-05", 0.0, 0.0, 0.0, 0.0, 0.0, 'Hospital Base Valdivia', 'Salud', 'Chile', 'No', 'NULL', 'FCI', 'OTL', 'Director', 'German Rehren'],
  [2017.0, 4.0, 'Software Paserinas', 281610, 'Derecho de autor', 2017, 'Concedida', 'Chile', 'Christian Lazo', 2016, 'NO', 'NULL', 'NULL', 'NULL', 0.0, 0.0, 0.0, 0.0, 0.0, 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'FCI', 'OTL', 'Director', 'German Rehren'],
  [2017.0, 5.0, 'Cosechadora de poliquetos', 201501609, 'Modelo de Utilidad', 2015, 'Concedida', 'Chile', 'Guillermo Valenzuela', 2014, 'NO', 'NULL', 'NULL', 'NULL', 0.0, 0.0, 0.0, 0.0, 0.0, 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'FCI', 'OTL', 'Director', 'German Rehren'],
  [2018.0, 6.0, 'DondeLaViste', 294304, 'Derecho de autor', 2018, 'Concedida', 'Chile', 'Gustavo Schleyer', 2017, 'Si', '2018-01-16', 'Vigente', "2020-12-31", 0.0, 0.0, 0.0, 0.0, 0.0, 'World Wildlife Fund, Inc.', 'Medio Ambiente', 'Chile', 'No', 'NULL', 'FCI', 'OTL', 'Director', 'German Rehren'],
]


const PI = () => {
  const [datos2,setDatos] = useState(datos)
  return (
    <div>
      <Table responsive="xl" size='sm' striped >
        <thead>
          <tr className='lab'>
            {datos2.map((valor,Index) => {
              return(
                <th key={Index}>{valor}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
            {valoresApi.map((valor,Index) => {
              return(
                <>
                <tr key={Index}>
                  {valor.map((valores) => {
                    return (
                    <td >{valores}</td>
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

export default PI