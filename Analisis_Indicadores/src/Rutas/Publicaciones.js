import React,{useState} from 'react'
import Table from 'react-bootstrap/Table'

const datos = [
  "AÑO PUBLICACION",
  "NOMBRE PUBLICACION",
  "NOMBRE AUTOR",
  "APELLIDO PATERNO AUTOR",
  "APELLIDO MATERNO AUTOR",
  "GENERO AUTOR",
  "TIPO AUTOR",
  "AUTOR PRINCIPAL",
  "N° DE COAUTORES TOTALES",
  "TIPO COAUTOR 1",
  "NOMBRE COMPLETO COAUTOR 1",
  "PAIS COAUTOR 1",
  "ORGANIZACIÓN COAUTOR 1",
  "TIPO COAUTOR 2"
]

const valoresApi = [
  [
    1195,
    "Este es un nombre muy publicador",
    "fabio",
    "Saez" ,
    "Jara",
    "Hombre",
    "Academico",
    "SI",
    "1",
    "Academico",
    "Juan",
    "Chile",
    "Universidad universadosa",
    "Academico"
  ],[
    1195,
    "Este es un nombre muy publicador",
    "fabio",
    "Saez" ,
    "Jara",
    "Hombre",
    "Academico",
    "SI",
    "1",
    "Academico",
    "Juan",
    "Chile",
    "Universidad universadosa",
    "Academico"
  ],
  [
    1195,
    "Este es un nombre muy publicador",
    "fabio",
    "Saez" ,
    "Jara",
    "Hombre",
    "Academico",
    "SI",
    "1",
    "Academico",
    "Juan",
    "Chile",
    "Universidad universadosa",
    "Academico"
  ]
]

const Publicaciones = () => {
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

export default Publicaciones