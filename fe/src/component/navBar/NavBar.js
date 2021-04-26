import Nav from 'react-bootstrap/Nav'
import React from 'react';

export default function NavBar() {
    return (
        <Nav bg="dar">
        <Nav.Item >
          <Nav.Link disabled className="nav-link">
              Inicio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link disabled className="nav-link">Perfil</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  className="nav-link">Agendar</Nav.Link>
        </Nav.Item>
      </Nav>
    );
}