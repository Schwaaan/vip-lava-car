import Nav from 'react-bootstrap/Nav'
import React from 'react';

export default function NavBar() {
    return (
        <Nav
        bg="dar"
      >
        <Nav.Item >
          <Nav.Link disabled className="nav-link">
              Inicio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link disabled eventKey="link-1" className="nav-link">Perfil</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="nav-link">Agendar</Nav.Link>
        </Nav.Item>
      </Nav>
    );
}