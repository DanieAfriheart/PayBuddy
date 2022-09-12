import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
// Icon
// import { FcRight } from "react-icons/fc";
import { BsArrowRight } from "react-icons/bs";
// images
import Transfer from "../img/trans.svg";
import entre from "../img/entrepreneur.svg"
import inter from "../img/international.svg"
import orga from "../img/organisation.svg"
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

            {/* Section 1 */}

            <Container fluid className='py-5 section1'>
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
                                    Get started with PayBuddy <BsArrowRight />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* Section 2 */}

            <Container fluid className='py-5 section2'>
                <Container className='px-5 rounded rounded-4'>
                    <Row className='h-100 justify-content-between rounded rounded-4' g={3}>

                        <Col md={5} className='justify-content-center d-flex flex-column'>
                            <h5 className='mb-3' style={{ color: '#3BB75E' }}>"Transfa"</h5>
                            <h1 className='fw-bold'>Seamless payments experience</h1>
                            <p className='my-3 col-md-10 '>Give your customers the gift of modern, frictionless, painless payments. Integrate Paystack once and let your customers pay you however they want.</p>
                            {/* <Button>Create free account</Button> */}
                            <div className="d-flex">
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

            <Container fluid className='py-5 section3' style={{ backgroundColor: '#EAF6FC' }}>
                <Container className='p-5'>
                    <h1 className='fw-bold'>Who can use PayBuddy</h1>
                    <p className='col-md-7 my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa iure sunt nesciunt corrupti, et omnis assumenda totam magnam. Ut, nobis.</p>
                    <Row className="justify-content-between pt-5">
                        <Col md={4}>
                            <Card style={{ width: '100%' }}>
                                <Card.Body className='p-4'>
                                    <img src={inter} alt="" className='img-fluid col-5' />
                                    <Card.Title className='fw-bold col-md-7 my-4'>PayBuddy for <br /> global developers</Card.Title>
                                    <Card.Text className='mb-4'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Card.Link href="#" style={{ textDecoration: 'none', color: 'black' }}><BsArrowRight className='border rounded-circle p-1 border-success text-success' /> Learn more</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '100%' }}>
                                <Card.Body className='p-4'>
                                    <img src={inter} alt="" className='img-fluid col-5' />
                                    <Card.Title className='fw-bold col-md-7 my-4'>PayBuddy for <br /> global developers</Card.Title>
                                    <Card.Text className='mb-4'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Card.Link href="#" style={{ textDecoration: 'none', color: 'black' }}><BsArrowRight className='border rounded-circle p-1 border-success text-success' /> Learn more</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '100%' }}>
                                <Card.Body className='p-4'>
                                    <img src={inter} alt="" className='img-fluid col-5' />
                                    <Card.Title className='fw-bold col-md-7 my-4'>PayBuddy for <br /> global developers</Card.Title>
                                    <Card.Text className='mb-4'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
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