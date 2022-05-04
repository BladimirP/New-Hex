import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import NavDropdown from 'react-bootstrap/NavDropdown'
import Academicos from '../Rutas/Academicos'
import Programas from '../Rutas/Programas'
import Laboratorios from '../Rutas/Laboratorios'
import Disclosures from '../Rutas/Disclosures'
import PI from '../Rutas/PI'
import Licencias from '../Rutas/Licencias'
import Proyectos from '../Rutas/Proyectos'
import Emprendimiento from '../Rutas/Emprendimiento'
import Publicaciones from '../Rutas/Publicaciones'
import Alianzas from '../Rutas/Alianzas'
import Evidencias from '../Rutas/Evidencias'




const NavbarGeneral = () => {
  return (
    <div ><Tabs
    defaultActiveKey="Evidencias"
    transition={false}
    id="noanim-tab-example"
    className="mb-3 styleTabs"
  >
    <Tab className='container' eventKey="Evidencias" title="Evidencias">
      <Evidencias />
    </Tab>
    <Tab className='container' eventKey="Programas y Carreras" title="Programas y Carreras">
      <Programas />
    </Tab>
    <Tab className='container' eventKey="Academicos" title="Academicos"  >
      <Academicos />
    </Tab>
    <Tab className='container' eventKey="Laboratorios" title="Laboratorios">
      <Laboratorios/>
    </Tab>
    <Tab className='container' eventKey="Disclosures" title="Disclosures" >
      <Disclosures/>
    </Tab>
    <Tab className='container' eventKey="PI" title="PI">
      <PI/>
    </Tab>
    <Tab className='container' eventKey="Licencias" title="Licencias">
      <Licencias/>
    </Tab>
    <Tab className='container' eventKey="Proyectos" title="Proyectos">
      <Proyectos/>
    </Tab>
    <Tab className='container' eventKey="Emprendimiento" title="Emprendimiento">
      <Emprendimiento/>
    </Tab>
    <Tab className='container' eventKey="Publicaciones" title="Publicaciones">
      <Publicaciones/>
    </Tab>
    <Tab className='container' eventKey="Alianzas" title="Alianzas">
      <Alianzas/>
    </Tab>

  </Tabs></div>
  )
}

export default NavbarGeneral