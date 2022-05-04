import React,{useState} from 'react'
import Table from 'react-bootstrap/Table'

const datos = 
['AÑO', 'Nº', 'Nombre Proyecto', 'Palabras clave (5)(separadas por coma)', 'Objetivo del Proyecto o contrato', 'Id. PI Asociada', 'Id. Disclosure asociado', 'Id. Licencia asociada', 'Innovación', 'Tipo de Innovación', 'NIVEL DE AVANCE', 'Potencial de Mercado', 'Nombre Director', 'N° Académicos', 'N° Investigadores', 'N° Profesionales/Técnicos', 'N° Otro personal de apoyo', 'N° Posdoctorados', 'N° alumnos Doctorado', 'N° Alumnos Magister', 'N° Alumnos Pregrado', 'Contract research', 'Fecha Inicio', 'Fecha Término', 'Monto Total Proyecto (adjudicado o contratado)MM', 'Fondos Públicos', 'Fuente Fondos Públicos (o cliente)', 'Fondos Privados', 'Fuente Fondos Privados (o cliente)', 'Fondos ONG', 'Fuente ONG (o cliente)', 'Fondos internacionales', 'Fuente Fondos Internacionales (o cliente)', 'Monto Año Reportado (Remesas, Ingresos Netos X Ventas)', 'Fondos Públicos.1', 'Fondos Privados.1', 'Fondos ONG.1', 'Fondos Internacionales', 'Actividad Económica Fuente (o cliente)', 'País Fuente (o cliente)', 'Unidad Responsable', 'Asociatividad Internacional', 'Entidad Internacional asociada', 'Fuente de la Información', 'CARGO AUTORIDAD QUE VALIDA INFORMACIÓN ', 'NOMBRE AUTORIDAD QUE VALIDA INFORMACIÓN ']

const valoresApi = [
  [2020, 'NULL', 'MOMO1', 'NULL', 'Diseño y manufactura de un dispositivo de apoyo a ventilación mecánica de emergencia\n', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'Si', 2020, 'NULL', 55000, 55000, 'Servicio de Salud (Gore)', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'No', 'NULL', 'Joaquín Castro', 'Director académico 14K', 'Guillaume Serandour'],
  [2020, 'NULL', 'Protector Faciales', 'NULL', 'Diseño y Manufactura de escudo faciales (EPP) para personal de salud de la región de los Ríos', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'Si', 2020, 'NULL', 15000, 15000, 'Servicio de Salud (Gore)', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'No', 'NULL', 'Joaquín Castro', 'Director académico 14K', 'Guillaume Serandour'],
  [2020, 'NULL', 'Tórulas', 'NULL', 'Diseño y Manufactura de Tórulas para muestra COVID-19', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'Si', 2020, 'NULL', 25000, 25000, 'Servicio de Salud (Gore)', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'No', 'NULL', 'Joaquín Castro', 'Director académico 14K', 'Guillaume Serandour'],
  [2020, 'NULL', 'Tablet Adulto Mayor', 'NULL', 'Desarrollo app para adultos mayores de Valdivia', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'Joaquín Castro', 'NULL', 'NULL', 2.0, 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'Si', 2020, 'NULL', 30, 30000, 'NULL', 30, 'Fundación Bloomberg', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'No', 'NULL', 'Joaquín Castro', 'Director académico 14K', 'Guillaume Serandour'],
]


const Proyectos = () => {
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

export default Proyectos