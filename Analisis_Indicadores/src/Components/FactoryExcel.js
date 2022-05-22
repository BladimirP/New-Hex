import React from 'react'
import Table from 'react-bootstrap/Table'

export const ExcelSimple = (props) => {
  return (
    <div><Table  striped >
    <thead className={props.clase}>
      <tr >
        {props.datos2.map((valor,Index) => {
          return(
            <th key={Index}>{valor}</th>
          )
        })}
      </tr>
    </thead>
    <tbody>
        {props.valoresApi.map((valor,Index) => {
          return(
            <>
            <tr key={Index}>
              {valor.map((valores) => {
                return (
                <td>{valores}</td>
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

export const ExcelDoble = (props) => {
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
            {props.valoresApi.map((valor,Index) => {
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
  

