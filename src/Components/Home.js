import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
// Icon
// import { FcRight } from "react-icons/fc";
import { BsArrowRight } from "react-icons/bs";
import { FcHighPriority } from "react-icons/fc";
// images
import Arm from "../img/ARM.cf099987.svg";
import Mono from "../img/Mono.bc5aaf90.svg";
import Paystack from "../img/Paystack.0a3649f0.svg";
// import Transfer from "../img/trans.svg";
import developer from "../img/developer.jpg"
import designer from "../img/designer.jpg"
import creator from "../img/creator.jpg"
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
    //  const[mod,setMod]=useState("")
    // useEffect(()=>{

    // },[])

    window.onload = function () {
        setTimeout(() => {
            document.getElementById('myModal').click()
        }, 5000);
    }

    return (
        <>
            <Navbar />
            <Container fluid className='py-5 mt-5 d-flex align-items-center hero' >
                <Container className='h-100'>
                    {/* Modal */}
                    {/* <!-- Button trigger modal --> */}
                    <button type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" id='myModal'>
                        Launch demo modal
                    </button>

                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel" className='text-danger d-flex align-items-center'><FcHighPriority /> Attention!!</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p className="text-small">This is a demo website for portfolio content, not a real financial institution</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <Row className='py-5 d-flex flex-row align-items-center justify-content-between h-100'>
                        <Col md={6}>
                            <div className="header">
                                <h1 className='col-md-10 display-4 fw-bold'>Credit card for Developers.</h1>
                                <p className='my-4 col-md-10 lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam adipisci odit est dolor quod numquam, modi, quaerat delectus in excepturi, cupiditate.</p>
                            </div>
                            <Row className='col-12 justify-content-between'>
                                <Col className='img-fluid col-3'><img src={Paystack} alt="" /></Col>
                                <Col className='img-fluid col-3'><img src={Mono} alt="" /></Col>
                                <Col className='img-fluid col-3'><img src={Arm} alt="" /></Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <img className='img-fluid w-100' src={require('../img/HomeImg.png')} alt="" />
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* Section 1 */}
            <Container fluid className='px-4'>
                <Row className='h-100 mb-3'>
                    <Col md={6} className='p-5' style={{ backgroundColor: '#F5F5FF' }}>
                        <Container className='ps-5'>
                            <h5 style={{ color: '#7000FF' }}>"My Kolo"</h5>
                            <h1 className='my-3'>A New Way <br /> to Save</h1>
                            <div className="d-flex">
                                <Button variant="transparent" className='text-small px-0 border-0'>
                                    Learn more <BsArrowRight />
                                </Button>
                            </div>
                            <img src={require('../img/ladies.png')} alt="" className='img-fluid mt-5' />
                        </Container>
                    </Col>
                    <Col md={6} className='p-5' style={{ backgroundColor: '#FDFBF9' }}>
                        <Container className='pe-5'>
                            <h5 style={{ color: '#F2761B' }}>"UseForms"</h5>
                            <h1 className='my-3'>Ask for payment <br /> from anywhere</h1>
                            <div className="d-flex">
                                <Button variant="transparent" className='text-small px-0 border-0'>
                                    Learn more <BsArrowRight />
                                </Button>
                            </div>
                            <img src={require('../img/heroImg.jpg')} alt="" className='img-fluid mt-5' />
                        </Container>
                    </Col>
                </Row>
            </Container>

            {/* Section 2 */}

            <Container fluid className='py-5 section2 px-0 mb-3' style={{ backgroundColor: '#F3F3EE' }}>
                <Container className='rounded rounded-4'>
                    <Row className='h-100 justify-content-between rounded rounded-4' g={3}>

                        <Col md={5} className='justify-content-center d-flex flex-column'>
                            <h5 className='mb-2' style={{ color: '#F2761B' }}>"Transfa"</h5>
                            <h1 className=''>Seamless payments experience</h1>
                            <p className='my-3 col-md-10 '>Give your customers the gift of modern, frictionless, painless payments. Integrate Paystack once and let your customers pay you however they want.</p>
                            {/* <Button>Create free account</Button> */}
                            <div className='px-0'>
                                <Row>
                                    <Col>
                                        <ul className='px-0'>
                                            <li>
                                                <Card.Link href="#" style={{ textDecoration: 'none', color: 'black' }}><BsArrowRight className='border rounded-circle p-1 border-success text-success' /> Card</Card.Link>
                                            </li>
                                            <li className='my-1'>
                                                <Card.Link href="#" style={{ textDecoration: 'none', color: 'black' }}><BsArrowRight className='border rounded-circle p-1 border-success text-success' /> Bank Account</Card.Link>
                                            </li>
                                            <li>
                                                <Card.Link href="#" style={{ textDecoration: 'none', color: 'black' }}><BsArrowRight className='border rounded-circle p-1 border-success text-success' /> Bank Transfer</Card.Link>
                                            </li>
                                            <li>
                                                <Card.Link href="#" style={{ textDecoration: 'none', color: 'black' }}><BsArrowRight className='border rounded-circle p-1 border-success text-success' /> USSD</Card.Link>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <ul className='px-0'>
                                            <li>
                                                <Card.Link href="#" style={{ textDecoration: 'none', color: 'black' }}><BsArrowRight className='border rounded-circle p-1 border-success text-success' /> Apple Pay</Card.Link>
                                            </li>
                                            <li className='my-1'>
                                                <Card.Link href="#" style={{ textDecoration: 'none', color: 'black' }}><BsArrowRight className='border rounded-circle p-1 border-success text-success' /> Visa QR</Card.Link>
                                            </li>
                                            <li>
                                                <Card.Link href="#" style={{ textDecoration: 'none', color: 'black' }}><BsArrowRight className='border rounded-circle p-1 border-success text-success' /> Mobile Money</Card.Link>
                                            </li>
                                            <li>
                                                <Card.Link href="#" style={{ textDecoration: 'none', color: 'black' }}><BsArrowRight className='border rounded-circle p-1 border-success text-success' /> POS</Card.Link>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                            <div className="d-flex mt-4">
                                <Button variant="transparent" className='text-small px-0 border-0'>
                                    Send money now <BsArrowRight />
                                </Button>
                            </div>
                        </Col>

                        <Col md={6}>
                            <img src={require('../img/home.gif')} alt="" className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className='py-5 section3 px-0' style={{ backgroundColor: '#F5F5FF' }}>
                <Container className='rounded rounded-4'>
                    <h1 className=''>Who can use PayBuddy</h1>
                    <p className='col-md-5 my-3 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa iure sunt nesciunt corrupti, et omnis assumenda totam magnam. Ut, nobis.</p>
                    <Row className="justify-content-between pt-5 gy-4">
                        <Col md={4}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={developer} className="img-fluid" />
                                <Card.Body className='p-4'>
                                    <Card.Title className='fw-bold col-md-7 my-4'>Developers</Card.Title>
                                    <Card.Text className='mb-5'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea neque sed ipsa accusantium.
                                    </Card.Text>
                                    <Card.Link href="#" style={{ textDecoration: 'none', color: 'black' }}><BsArrowRight className='border rounded-circle p-1 border-success text-success' /> Learn more</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={designer} className="img-fluid" />
                                <Card.Body className='p-4'>
                                    <Card.Title className='fw-bold col-md-7 my-4'>Designers</Card.Title>
                                    <Card.Text className='mb-5'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea neque sed ipsa accusantium.
                                    </Card.Text>
                                    <Card.Link href="#" style={{ textDecoration: 'none', color: 'black' }}><BsArrowRight className='border rounded-circle p-1 border-success text-success' /> Learn more</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={creator} className="img-fluid" />
                                <Card.Body className='p-4'>
                                    <Card.Title className='fw-bold col-md-7 my-4'>Creators</Card.Title>
                                    <Card.Text className='mb-5'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea neque sed ipsa accusantium.
                                    </Card.Text>
                                    <Card.Link href="#" style={{ textDecoration: 'none', color: 'black' }}><BsArrowRight className='border rounded-circle p-1 border-success text-success' /> Learn more</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className='py-5'>
                <Container>

                </Container>
            </Container>

            <Footer />
        </>
    );
}

export default Home;