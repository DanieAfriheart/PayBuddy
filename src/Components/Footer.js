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
                        <Row className='justify-content-between'>
                            <Col md={2} classNameName='col-6 mb-3'>
                                <h5>Why PayBuddy</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Whychoose PayBuddy</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Success Rate</a></li><br />

                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">For entrepreneurs</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">For corporates</a></li><br />

                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">For International Companies</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">For Startups</a></li>

                                </ul>
                            </Col>

                            <Col md={2} classNameName='col-6 mb-3'>
                                <h5>Pricing</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Nigeria</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Ghana</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">South Africa</a></li>
                                </ul><br />
                                <h5>Customers</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Testimonials</a></li>
                                </ul>
                                <h5>Learn</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Blog</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Guides</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Video Tutorials</a></li>
                                </ul>
                            </Col>

                            <Col md={2} classNameName='col-6 mb-3'>
                                <h5>Developer</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Overview</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Documentation</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Integration</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Status Page</a></li>
                                </ul><br />
                                <h5>Community</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Nigeria Lagos</a></li>
                                </ul><br />
                                <h5>Support</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Help Desk</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact Us</a></li>
                                </ul>
                            </Col>

                            <Col md={2} classNameName='col-6 mb-3'>
                                <h5>About</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Company</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Subscribe</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Compliance</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Careers</a></li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className='justify-content-between mt-5'>
                            <Col md={2} classNameName='col-6 mb-3'>
                                <h5>Contact</h5>
                                <ul className="nav">
                                    <a href="#" className='text-small'> esuoladaniel002@gmail.com</a>
                                    <li className="ms-3"><a className="link-dark fs-4" href="#"><TbBrandMeta /></a></li>
                                    <li className="ms-3"><a className="link-dark fs-4" href="#"><TbBrandInstagram /></a></li>
                                    <li className="ms-3"><a className="link-dark fs-4" href="#"><TbBrandTwitter /></a></li>
                                </ul>
                            </Col>

                            <Col md={2} classNameName='col-6 mb-3'>
                                <h5>Lagos</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, saepe enim temporibus quisquam id tempore.</a></li>
                                </ul><br />
                                <h5>Accra</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, laboriosam.</a></li>
                                </ul>
                            </Col>

                            <Col md={2} classNameName='col-6 mb-3'>
                                <h5>San Francisco</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Lorem ipsum dolor sit amet.</a></li>
                                </ul><br />
                                <h5>Dubai</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laborum ad ipsa dolore! Illum, beatae!</a></li>
                                </ul>
                            </Col>

                            <Col md={2} classNameName='col-6 mb-3'>
                                <h5>Capetown</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quo necessitatibus quisquam ratione nihil error in beatae sunt deserunt vel.</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>&copy; 2022 Company, Inc. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">

                        </ul>
                    </div>
                </Container>
            </Container>
        </>
    );
}

export default Footer;