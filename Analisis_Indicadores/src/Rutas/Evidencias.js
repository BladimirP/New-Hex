import React,{useState} from 'react'
import Table from 'react-bootstrap/Table'

const datos = [
    "Calificación CORFO PI 2030",
    "Misión universitaria",
    "N°",
    "Objetivo",
    "Nombre indicador",
    "Evidencia de resultado",
  ]
  
  const valoresApi = [
    [
      "Criticos",
      "1ra",
      "1",
      "Armonización Curricular y foco en posgrados Tecnológicos" ,
      "Number of engineering degrees granted (undergraduate)",
      "informe ingsum salbe tabla random rades",
      "Programas y Carreras",
    ],[
      "Criticos",
      "1ra",
      "1",
      "Armonización Curricular y foco en posgrados Tecnológicos" ,
      "Number of engineering degrees granted (undergraduate)",
      "informe ingsum salbe tabla random rades",
      "Programas y Carreras",
    ],
    [
      "Criticos",
      "1ra",
      "1",
      "Armonización Curricular y foco en posgrados Tecnológicos" ,
      "Number of engineering degrees granted (undergraduate)",
      "informe ingsum salbe tabla random rades",
      "Programas y Carreras",
    ]
  ]
  

const Evidencias = () => {
  const [datos2,setDatos] = useState(datos)
  const size = datos.length;
  return (
    <div>
        <Table responsive="xl" size='sm' striped >
        <thead>
          <tr className='evidencias'>
            {datos2.map((valor,Index) => {
              return(
                 Index < size-1 ?
                <th key={Index}>{valor}</th>:
                <>
                <th key={Index} colSpan={2}>{valor}</th>
                </>
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

export default Evidencias