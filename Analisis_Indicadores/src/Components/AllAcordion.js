import React, {useState} from 'react'
import Acordion from './Acordion'

const AllAcordion = (props) => {

const [elem, setElemen] = useState(props.info)
//setElemen(props.info)

  return (
      <div>
          {console.log(elem)}
        {elem.map((eje, Index) => {
            return(
            <div key={Index}>
                <Acordion nombre={eje.nombreEje} porcentaje={eje.porcentaje} indicadores={props.infoIndicadores} />
            </div>
            )
        })}
    </div>
  )
}

export default AllAcordion