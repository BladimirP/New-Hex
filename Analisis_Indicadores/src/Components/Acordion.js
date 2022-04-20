import React, {useState} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import "./estilos.css"


const Acordion = (props) => {

  const [indi, setIndi] = useState(props.indicadores)

  return (
    <div>
        <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>{props.nombre} - {props.porcentaje}</Accordion.Header>
          <Accordion.Body>
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