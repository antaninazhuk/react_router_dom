import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">By Antanina Zhuk</Navbar.Brand>
          <Nav className="me-auto">
            <Link  style={{color: '#fff', marginRight: '5px', textDecoration: 'none'}} to='/people'>People</Link>
            <Link style={{color: '#fff', marginRight: '5px', textDecoration: 'none'}} to='/todos'>Todos</Link>
            <Link style={{color: '#fff', textDecoration: 'none'}} to='/news'>News</Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

