import React, {useState} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import "./estilos.css"


const Acordion = (props) => {

  const [indi, setIndi] = useState(props.indicadores)



  return (
    <div >
        <Accordion className='style01'>
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
                  <hr/>
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