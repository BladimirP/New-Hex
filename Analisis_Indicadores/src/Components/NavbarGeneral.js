import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"


const NavbarGeneral = () => {
  return (
    <>
      <Navbar className='navBg' expand="lg" >
        <Container>
          <Navbar.Brand>Innoving 2030</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='me-auto'>
            <Nav.Link as={Link} to="/">Evidencias</Nav.Link>
            <Nav.Link as={Link} to="/academicos">Academicos</Nav.Link>
            <Nav.Link as={Link} to="/programas">Programas</Nav.Link>
            <Nav.Link as={Link} to="/laboratorios">Laboratorios</Nav.Link>
            <Nav.Link as={Link} to="/pi">PI</Nav.Link>
            <Nav.Link as={Link} to="/disclosures">Disclosures</Nav.Link>
            <Nav.Link as={Link} to="/licencias">Licencias</Nav.Link>
            <Nav.Link as={Link} to="/proyectos">Proyectos</Nav.Link>
            <Nav.Link as={Link} to="/emprendimiento">Emprendimiento</Nav.Link>
            <Nav.Link as={Link} to="/publicaciones">Publicaciones</Nav.Link>
            <Nav.Link as={Link} to="/alianzas">Alianzas</Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
      <Outlet></Outlet>
    </section>
  </>
  )
}

export default NavbarGeneral