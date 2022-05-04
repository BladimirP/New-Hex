import React,{useState} from 'react'
import Table from 'react-bootstrap/Table'

const datos = 
['AÑO', 'Nº', 'Número o código (Id) de licencia', 'Nombre (Titulo) de la Licencia ', 'Id. PI Asociada', 'Id. Disclosure asociado', 'Fecha del Contrato de Licenciamiento', 'Estado del Contrato', 'Fecha de Término de Contrato', 'Ingresos por Por  concepto de Anticipo ($M)', 'Ingresos por cumplimiento de hitos de contrato ($M)', 'Ingresos por regalías ($M)', 'Ingresos por Asesorías Técnicas, servicios, soporte o mantenimiento considerado en la licencia', 'Monto fijo por uso de tecnología', 'Otros Ingresos', 'Total Ingresos de la facultad por Licenciamiento ANUAL ($M)', 'Nombre del Licenciatario', 'Actividad Económica Licenciatario', 'País Licenciatario', '¿Es una spin-off / start-up de la Facultad?', 'Investigador/Académico Responsable ', 'Unidad/Instituto/Centro/Departamento ', 'Fuente de la Información', 'CARGO AUTORIDAD QUE VALIDA INFORMACIÓN ', 'NOMBRE AUTORIDAD QUE VALIDA INFORMACIÓN ']

const valoresApi = [
  [2018, 2, 2.0, 'Licencia gratuita sistema "DondeLaViste?" a WWF', 'NULL', '016-2017','2018-01-16', 'Vigente', "2020-12-31", 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0, 'World Wildlife Fund, Inc.', 'Medio Ambiente', 'Chile', 'No', 'Gustavo Schleyer Daza', 'Inst. Electrónica', 'OTL', 'COORDINADOR OTL Y DIRECTOR DEPARTAMENTO DE DESARROLLO E INNOVACIÓN', 'Germán Rehren'],
  [2019, 3, 2.0, 'Licencia gratuita uso de aplicación "DondeLaViste? a Ceaza', 'NULL', '016-2017', '2019-12-10', 'vigente', "2025-09-10", 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0, 'CEAZA, CHILE (centro de estudios avanzados en zonas áridas)', 'Medio Ambiente', 'Chile', 'No', 'Gustavo Schleyer Daza', 'Inst. Electrónica', 'OTL', 'COORDINADOR OTL Y DIRECTOR DEPARTAMENTO DE DESARROLLO E INNOVACIÓN', 'Germán Rehren'],
  [2019, 4, 'NULL', 'Licencia comercial Erudio Kiman', 'NULL', '015-2019', '2019-01-14', 'Vigente', "2029-01-14", 200, 0.0, 0.0, 0.0, 0.0, 0.0, 0, 'VITGLOBAL', 'Actividades profesionales, científicas y técnicas (**)', 'Chile', 'No', 'Enrique Suárez', 'Instituto de Acústica', 'OTL', 'COORDINADOR OTL Y DIRECTOR DEPARTAMENTO DE DESARROLLO E INNOVACIÓN', 'Germán Rehren'],
  [2020, 5, 2.0, 'Licencia de uso gratutito de la aplicación de avistamiento de Fauna Marina "DondeLaViste?', 'NULL', '016-2017', '2020-03-01', 'vigente', "2026-03-01", 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0, 'Servicio Nacional de Pesca y Acuicultura (Sernapesca)', 'Agricultura, ganadería, caza, silvicultura y pesca', 'Chile', 'No', 'Gustavo Schleyer Daza', 'Inst. Electrónica', 'OTL', 'COORDINADOR OTL Y DIRECTOR DEPARTAMENTO DE DESARROLLO E INNOVACIÓN', 'Germán Rehren'],
  [2020, 6, 'NULL', 'Revistimiento de muro', 'NULL', '2020-17', '2020-04-24', 'Vigente', "1930-04-24", 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0, 'Felipe Andrés Valenzuela Gutierrez', 'Construcción', 'Chile', 'No', 'NULL', 'NULL', 'OTL', 'COORDINADOR OTL Y DIRECTOR DEPARTAMENTO DE DESARROLLO E INNOVACIÓN', 'Germán Rehren']
]

const Licencias = () => {
  const [datos2,setDatos] = useState(datos)
  return (
    <div><Table responsive="xl" size='sm' striped >
    <thead>
      <tr>
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
  </Table></div>
  )
}

export default Licencias