import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
    const handleHover = () => {
        // document.getElementById('dropdown').click()
        document.getElementById(`dropdown`).click()
    }

    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3 shadow" fixed='top'>
                    <Container>
                        <Navbar.Brand href="#" className='fw-bold'>PayBuddy</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        onMouseEnter={handleHover}
                                    >
                                        <NavDropdown.Item href="#action3"><a class="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                                            <span class="d-inline-block bg-success rounded-circle p-1"></span>
                                            Action
                                        </a></NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            <a class="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                                                <span class="d-inline-block bg-primary rounded-circle p-1"></span>
                                                Another Action
                                            </a>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            <a class="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                                                <span class="d-inline-block bg-danger rounded-circle p-1"></span>
                                                Something else here
                                            </a>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            <a class="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                                                <span class="d-inline-block bg-info rounded-circle p-1"></span>
                                                Seperated link
                                            </a>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                {/* <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                </Form> */}
                                    <Button variant="dark">Create a free acount</Button>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))
            }
        </>
    );
}

export default OffcanvasExample;