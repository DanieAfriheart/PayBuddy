import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FcRight } from "react-icons/fc";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

// images
import Transfer from "../img/trans.svg";

const Home = () => {

    const handleNewsletter = () => {
        alert('gbemidebe');
    }

    return (
        <>
            <Container fluid className='py-5 mt-5 d-flex align-items-center hero' >
                <Container className='h-100'>
                    <Row className='py-5 d-flex flex-row align-items-center justify-content-between h-100'>
                        <Col md={6}>
                            <div className="header">
                                <h1 className='fw-bold col-md-10'>A special credit card made for Developers.</h1>
                                <p className='my-4 mx-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam adipisci odit est dolor quod numquam, modi, quaerat delectus in excepturi, cupiditate.</p>
                            </div>
                            <Form className="d-flex border rounded p-1 mx-auto mb-5">
                                <Form.Control
                                    type="Input"
                                    placeholder="Subscribe to our newsletter"
                                    className="me-2"
                                    aria-label="Search"
                                    style={{ border: 'none', backgroundColor: 'none' }}
                                />
                                <Button variant="dark" className='Btn' onClick={handleNewsletter}>Subscribe</Button>
                            </Form>
                            <Row md={6}>
                                <Col md={3} className='d-flex align-items-center'>
                                    <p className=" fw-bold fs-3 me-2">100+</p>
                                    <p>Cards <br /> Delivered</p>
                                </Col>
                                <Col className='d-flex align-items-center text-center d-flex justify-content-center'>
                                    <img className='img-fluid' src={require('../img/scribble.png')} alt="" />
                                </Col>
                                <Col md={3} className='d-flex align-items-center'>
                                    <p className=" fw-bold fs-3 me-2">$10M+</p>
                                    <p>Transactions <br /> Completed</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <img className='img-fluid w-100' src={require('../img/HomeImg.png')} alt="" />
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className='py-5'>
                <Container className='bgCustom p-5 rounded rounded-4'>
                    <Row className='h-100 justify-content-between rounded rounded-4' g={3}>
                        <Col md={6}>
                            <img src={require('../img/ladies.png')} alt="" className='img-fluid' />
                        </Col>
                        <Col md={5} className='justify-content-center d-flex flex-column'>
                            <h5 className='mb-3' style={{ color: '#EECCD8' }}>"My Kolo"</h5>
                            <h1 className='fw-bold'>A New Way to Save</h1>
                            <p className='my-3 col-md-10 '>Save a small percentage from your bank account every time you spend or earn money, from any bank account.</p>
                            <div className="d-flex">
                                <Button variant="transparent" className='text-small px-0 border-0'>
                                    Get started with PayBuddy <FcRight />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='py-5'>
                <Container className='px-5 rounded rounded-4'>
                    <Row className='h-100 justify-content-between rounded rounded-4' g={3}>

                        <Col md={5} className='justify-content-center d-flex flex-column'>
                            <h5 className='mb-3' style={{ color: '#3BB75E' }}>"Transfa"</h5>
                            <h1 className='fw-bold'>Seamless payments experience</h1>
                            <p className='my-3 col-md-10 '>Give your customers the gift of modern, frictionless, painless payments. Integrate Paystack once and let your customers pay you however they want.</p>
                            {/* <Button>Create free account</Button> */}
                            <div className="d-flex">
                                <Button variant="transparent" className='text-small px-0 border-0'>
                                    Send money now <FcRight />
                                </Button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <img src={require('../img/map.jpg')} alt="" className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='py-5'>
                <Container className='p-5 rounded rounded-4' style={{backgroundColor:'#F5F5FF'}}>
                    <Row className='h-100 justify-content-between rounded rounded-4' g={3}>
                        <Col md={6}>
                            <img src={Transfer} alt="" className='img-fluid' />
                        </Col>
                        <Col md={5} className='justify-content-center d-flex flex-column'>
                            {/* <h5 className='mb-3' style={{ color: '#E3AA62' }}></h5> */}
                            <h1 className='fw-bold'>Give With Love ❤️ </h1>
                            <p className='my-3 col-md-10 '>Make a difference by supporting fundraisers, gift Egbon Adugbo with ease.</p>
                            <div className="d-flex">
                                <Button variant="transparent" className='text-small px-0 border-0'>
                                    Give through the app <FcRight />
                                </Button>
                            </div>
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