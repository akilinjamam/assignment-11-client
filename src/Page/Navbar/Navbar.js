import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../img-logo-favicon/car-for-assignment-11.png'

const Navbarr = () => {

    const [user] = useAuthState(auth);

    const signOuting = () => {
        console.log('working');
        signOut(auth);

    }
    return (
        <div style={{ position: 'sticky', top: '0', zIndex: '10' }}>
            <Navbar style={{ backgroundColor: 'black' }} collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home" > <img style={{ width: '160px' }} src={logo} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/blogs" >Blogs</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user && <Nav.Link as={Link} to="/additems" >Add New Item</Nav.Link>
                            }

                            {
                                user && <Nav.Link as={Link} to="/myitem" >My Item</Nav.Link>
                            }


                            {
                                user ? <button onClick={signOuting} style={{ backgroundColor: 'rgba(255, 255, 255, 0)', color: 'white' }}>Logout</button> : <Nav.Link as={Link} to="/login" eventKey={2} href="#memes">
                                    Login
                                </Nav.Link>

                            }

                            {
                                user && <span onClick={signOuting} style={{ backgroundColor: 'rgba(255, 255, 255, 0)', color: 'white', paddingTop: '8px', marginLeft: '5px' }}> {user.displayName} </span>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbarr;