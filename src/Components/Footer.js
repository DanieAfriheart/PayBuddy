import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

// Icons
import { TbBrandMeta, TbBrandInstagram, TbBrandTwitter } from "react-icons/tb";

const Footer = () => {
    return (
        <>
            <Container fluid>
                <Container>
                    <div classNameName="footer py-5">
                        <Row>
                            <Col md={2} classNameName='col-6 mb-3'>
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                                </ul>
                            </Col>

                            <Col md={2} classNameName='col-6 mb-3'>
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                                </ul>
                            </Col>

                            <Col md={2} classNameName='col-6 mb-3'>
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                                </ul>
                            </Col>

                            <Col md={5} classNameName='offset-md-1 mb-3'>
                                <Form>
                                    <h5>Subscribe to our newsletter</h5>
                                    <p>Monthly digest of what's new and exciting from us.</p>
                                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                        <label for="newsletter1" className="visually-hidden">Email address</label>
                                        <Form.Control
                                            type="Input"
                                            placeholder="Email address"
                                            // classNameName="me-2"
                                            aria-label="Search"
                                        // style={{ border: 'none', backgroundColor: 'none' }}
                                        />
                                        {/* <input id="newsletter1" type="text" className="form-control" placeholder="Email address"> */}
                                        <button className="btn btn-primary" type="button">Subscribe</button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>&copy; 2022 Company, Inc. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><a className="link-dark fs-4" href="#"><TbBrandMeta /></a></li>
                            <li className="ms-3"><a className="link-dark fs-4" href="#"><TbBrandInstagram /></a></li>
                            <li className="ms-3"><a className="link-dark fs-4" href="#"><TbBrandTwitter /></a></li>
                        </ul>
                    </div>
                </Container>
            </Container>
        </>
    );
}

export default Footer;