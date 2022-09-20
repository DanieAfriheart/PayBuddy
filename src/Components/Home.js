import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
// Icon
// import { FcRight } from "react-icons/fc";
import { BsArrowRight } from "react-icons/bs";
import { FcHighPriority } from "react-icons/fc";
// images
import Arm from "../img/ARM.cf099987.svg";
import Mono from "../img/Mono.bc5aaf90.svg";
import Paystack from "../img/Paystack.0a3649f0.svg";
import developer from "../img/developer.jpg"
import designer from "../img/designer.jpg"
import creator from "../img/creator.jpg"
const Home = () => {

    const handleNewsletter = () => {
        alert('gbemidebe');
    }

    window.onload = function () {
        setTimeout(() => {
            document.getElementById('myModal').click()
        }, 5000);
    }

    return (
        <>
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
                                {/* <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div> */}
                            </div>
                        </div>
                    </div>


                    <Row className='py-5 d-flex flex-row align-items-center justify-content-between h-100'>
                        <Col md={6}>
                            <div className="header">
                                {/* <p className="text-small">This is a demo website for portfolio content, not a real financial institution</p> */}
                                <h1 className='fw-bold col-md-10'>A special credit card made for Developers.</h1>
                                <p className='my-4 mx-auto lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam adipisci odit est dolor quod numquam, modi, quaerat delectus in excepturi, cupiditate.</p>
                            </div>
                            {/* <Form className="d-flex border rounded p-1 mx-auto mb-5">
                                <Form.Control
                                    type="Input"
                                    placeholder="Subscribe to our newsletter"
                                    className="me-2"
                                    aria-label="Search"
                                    style={{ border: 'none', backgroundColor: 'none' }}
                                />
                                <Button variant="dark" className='Btn' onClick={handleNewsletter}>Subscribe</Button>
                            </Form> */}
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

            <Container fluid className='py-5 section1 px-0'>
                <Container className='bgCustom p-5 rounded rounded-4'>
                    <Row className='h-100 justify-content-between rounded rounded-4' g={3}>
                        <Col md={6}>
                            <img src={require('../img/ladies.png')} alt="" className='img-fluid' />
                        </Col>
                        <Col md={5} className='justify-content-center d-flex flex-column'>
                            <h5 className='mb-2' style={{ color: '#EECCD8' }}>"My Kolo"</h5>
                            <h1 className='fw-bold'>A New Way to Save</h1>
                            <p className='my-3 col-md-10 '>Save a small percentage from your bank account every time you spend or earn money, from any bank account.</p>
                            <div className="d-flex">
                                <Button variant="transparent" className='text-small px-0 border-0'>
                                    Get started with PayBuddy <BsArrowRight />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* Section 2 */}

            <Container fluid className='py-5 section2 px-0'>
                <Container className='px-5 rounded rounded-4'>
                    <Row className='h-100 justify-content-between rounded rounded-4' g={3}>

                        <Col md={5} className='justify-content-center d-flex flex-column'>
                            <h5 className='mb-2' style={{ color: '#3BB75E' }}>"Transfa"</h5>
                            <h1 className='fw-bold'>Seamless payments experience</h1>
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
                            <img src={require('../img/map.jpg')} alt="" className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* Section 3 */}

            <Container fluid className='py-5 section3 bg-light px-0'>
                <Container className='p-5 rounded rounded-4'>
                    <h1 className='fw-bold'>Who can use PayBuddy</h1>
                    <p className='col-md-7 my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa iure sunt nesciunt corrupti, et omnis assumenda totam magnam. Ut, nobis.</p>
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

        </>
    );
}

export default Home;