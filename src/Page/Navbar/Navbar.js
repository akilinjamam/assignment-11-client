import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img-logo-favicon/car-for-assignment-11.png'

const Navbarr = () => {
    return (
        <div style={{ position: 'sticky', top: '0', zIndex: '10' }}>
            <Navbar style={{ backgroundColor: 'black' }} collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home" > <img style={{ width: '160px' }} src={logo} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/additems" >Add Items</Nav.Link>
                            <Nav.Link as={Link} to="/login" eventKey={2} href="#memes">
                                Login
                            </Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbarr;