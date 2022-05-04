import React,{useState} from 'react'
import Table from 'react-bootstrap/Table'

const datos =
['Nº', 'AÑO REPORTE', 'Nombre de la empresa', 'Actividad económica de la empresa', 'Fecha de creación de la empresa', 'Iniciativa donde se origina ', 'Id. PI Asociada', 'Id. Disclosure asociado', 'Id. Licencia asociada', 'Porcentaje Propiedad Universidad', 'Número Total de Socios', 'Número de Mujeres Socias', 'Número Total de Socios Funcionarios', 'Número de Socias Funcionarias', 'Número Total de Socios Alumnos / Exalumnos', 'Número  socias Alumnas / Exalumnas', 'Número Total de trabajos creados hombres ', 'Número Total de trabajos creados mujeres', 'Ingresos Generados ($M)', 'AÑO Ingresos generados', 'Inversión externa levantada  ($M)', 'AÑO Inversión levantada ', 'Unidad Responsable', 'Fuente de la Información', 'CARGO AUTORIDAD QUE VALIDA INFORMACIÓN ', 'NOMBRE AUTORIDAD QUE VALIDA INFORMACIÓN ']

const valoresApi = [
  [1, 2017, 'Black Thermic', 'Industrias manufactureras', 'NULL', 'Proyectos de tesis (LeufüLab)', 'No aplica', 'No aplica', 'No aplica', 0, 4.0, 0.0, 0.0, 0.0, 4.0, 0.0, 4.0, 0.0, 0.0, '2017', 'PRAE CORFO', 2017.0, 'NULL', 'NULL', 'NULL', 'NULL'],
  [2, 2018, 'Close 2 Me', 'Información y comunicaciones', 'NULL', 'Bienvenida nuevos estudiantes Ing.', 'No aplica', 'No aplica', 'No aplica', 0, 4.0, 0.0, 0.0, 'NULL', 4.0, 0.0, 4.0, 0.0, 0.0, '2018', 0, 0.0, 'NULL', 'Marcelo Salas González', 'Ejecutivo Oficina i+e', 'Rodrigo Vásquez'],
  [3, 2019, 'Klocker & Matzner SpA', 'EL objeto de la sociedad es extracción de peróleo crudo y gas natural; actividades relacionadas, fabricación de productos de hornos coque y de refinación de petróleo, generación, capacitación y distribución de energía eléctrica, industrias manufactureras no clasificado previamente, reciclaminto de desperdicios y desechos, venta al por mayor de otros productos.', "2019-10-30", 'NULL', 'No aplica', 'No aplica', 'No aplica', 0, 2.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 0.0, 'NULL', '15000000 (Fondo Semilla Inicia CORFO)', 2019.0, 'Oficina i+e', 'Camila Mejías', 'Coordinadora Oficina i+e', 'Camila Mejías'],
  [4, 2019, 'Mapu Kimün SpA', 'El objeto de la sociedad es venta al por mayor de materias primas agropecuarias, actividades de servicios agrícolas y ganaderos, comercio al por menor no realizado en almacenes, cultivo de productos agrícolas en combinación con cría de animales, cultivos en general; cultivo de productos de mercado; horticultura.', "2019-09-16", 'NULL', 'No aplica', 'No aplica', 'No aplica', 0, 2.0, 0.0, 0.0, 0.0, 1.0, 0.0, 'NULL', 'NULL', 635.0, '2019', '3500000 (Fondo Semilla Emprende Sercotec)', 2019.0, 'Oficina i+e', 'Camila Mejías', 'Coordinadora Oficina i+e', 'Camila Mejías']
]

const Emprendimiento = () => {
  const [datos2,setDatos] = useState(datos)
  return (
    <div>
      <Table responsive="xl" size='sm' striped >
        <thead>
          <tr className='emprendimiento'>
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

export default Emprendimiento