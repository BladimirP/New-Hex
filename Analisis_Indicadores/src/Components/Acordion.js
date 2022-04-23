import React, {useState} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import "./estilos.css"


const Acordion = (props) => {

  const [indi, setIndi] = useState(props.indicadores)

  const style = {
    margin: '0.5em',
    paddingLeft: 0,
    listStyle: 'none',
  };
  const style0 = {
    color: "red"
  }
  const style10= {
    color: "green"
  }

  const calcularColor = (porcentaje) => {
    let porcentajeInt = parseInt(porcentaje);
    if (porcentajeInt <50){
    return "style0" }
    else return "style10"
  }

  return (
    <div >
        <Accordion style={style}>
        <Accordion.Item eventKey="0" >
          <Accordion.Header >
            
            {props.nombre}
            <h3 className={parseInt(props.porcentaje) <= 50 ? "porcentaje style0" : "porcentaje style10"}> {props.porcentaje}% </h3>    
          </Accordion.Header>
          <Accordion.Body >
            {indi.map((indicador) => {
              return(
                <div key={indicador.id}>
                  <h3 className='texto'>{indicador.nombre}</h3>
              </div>
              )
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Acordion