import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { IconName } from "react-icons/fc";
// Images
// import PayBuddy from "../img/PayBuddy.png" 

function CollapsibleExample() {

    return (
        <Navbar fixed='top' className='shadow-sm' collapseOnSelect expand="lg" bg="" variant="light" style={{ backgroundColor: '#FFFFFF' }}>
            <Container>
                <Navbar.Brand href="#home" className='fw-bold'>PayBuddy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">

                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#deets" className='me-3'>Login</Nav.Link>
                        <Button variant="dark" className='Btn'>
                            Create free account
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;