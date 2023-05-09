import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
function Header(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">DevOps Project</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link >Asset</Nav.Link>
                        <Nav.Link >Management</Nav.Link>
                        <Nav.Link>Software</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;