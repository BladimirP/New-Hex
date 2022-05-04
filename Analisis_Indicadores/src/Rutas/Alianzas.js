import React,{useState} from 'react'
import Table from 'react-bootstrap/Table'

const datos = [
  "AÑO iniciativa",
  "ID Iniciativa",
  "Nombre Iniciativa",
  "Responsable iniciativa",
  "Cargo Responsable Iniciativa",
  "Fecha Inicio",
  "Fecha Termino",
  "Descripcion Iniciativa",
  "ID. ACUERDO o Alianza",
  "Nombre Acuerdo / Alianza",
  "Objetivo Acuerdo/ Alianza",
  "Fecha Acuertdo",
  "Institución",
  "Tipo Organización"
]

const valoresApi = [
  [
    1092,
    0,
    "Inciativa que inicia",
    "Cristobal Indiferente" ,
    "Académico",
    "02-05-2022",
    "Este dato es un misterio",
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "Instituto desconocido",
    "Universidad de Monstruos",
    "Monstruopolis"
  ],[
    1092,
    0,
    "Inciativa que inicia",
    "Cristobal Indiferente" ,
    "Académico",
    "02-05-2022",
    "Este dato es un misterio",
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "Instituto desconocido",
    "Universidad de Monstruos",
    "Monstruopolis"
  ],
  [
    1092,
    0,
    "Inciativa que inicia",
    "Cristobal Indiferente" ,
    "Académico",
    "02-05-2022",
    "Este dato es un misterio",
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "Instituto desconocido",
    "Universidad de Monstruos",
    "Monstruopolis"
  ]
]

const Alianzas = () => {
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

export default Alianzas