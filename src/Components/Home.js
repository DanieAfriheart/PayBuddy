import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FcRight } from "react-icons/fc";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Home = () => {

    const handleNewsletter = () => {
        alert('gbemidebe');
    }

    return (
        <>
            <Container fluid className='py-5 mt-5 d-flex align-items-center hero'>
                <Container className='h-100'>
                    <Row className='py-5 d-flex flex-row align-items-center justify-content-between h-100'>
                        <Col md={6}>
                            <div className="header">
                                <h1 className='fw-bold display-4 col-md-10'>A special credit card made for Developers.</h1>
                                <p className='my-4 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam adipisci odit est dolor quod numquam, modi, quaerat delectus in excepturi, cupiditate enim. Asperiores, dolor molestiae.</p>
                            </div>
                            <Form className="d-flex border rounded p-1 mx-auto mb-5">
                                <Form.Control
                                    type="Input"
                                    placeholder="Subscribe to our newsletter"
                                    className="me-2"
                                    aria-label="Search"
                                    style={{ border: 'none', backgroundColor: 'none' }}
                                />
                                <Button variant="dark" onClick={handleNewsletter}>Subscribe</Button>
                            </Form>
                            <Row md={6}>
                                <Col md={3} className='d-flex align-items-center'>
                                    <p className="lead fw-bold fs-3 me-2">100+</p>
                                    <p>Cards <br /> Delivered</p>
                                </Col>
                                <Col className='d-flex align-items-center text-center d-flex justify-content-center'>
                                    <img className='img-fluid' src={require('../img/scribble.png')} alt="" />

                                </Col>
                                <Col md={3} className='d-flex align-items-center'>
                                    <p className="lead fw-bold fs-3 me-2">$10M+</p>
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

            <Container fluid >
                <Container className='py-5'>
                    <h3>Trusted By</h3>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                        <Col>3 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className='py-5 bgCustom my-3'>
                <Container>
                    <Row className='h-100 justify-content-between rounded rounded-4' g={3}>
                        <Col md={6}>
                            <img src={require('../img/ladies.png')} alt="" className='img-fluid' />
                        </Col>
                        <Col md={5} className='justify-content-center d-flex flex-column'>
                            <h1 className='fw-bold'>Bank of the Elites.</h1>
                            <p className='my-4 col-md-10 lead'>We’re here to help you get the best out of your money, no strings attached. Welcome to your freedom!</p>
                            {/* <Button>Create free account</Button> */}
                            <div className="d-flex">
                                <Button variant="transparent" className='text-small'>
                                    Get started with PayBuddy <FcRight />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            {/* <Container fluid className='py-5  my-3'>
                <Container>
                    <Row className='h-100 justify-content-between rounded rounded-4' g={3}>
                        <Col md={5}>
                            <img src={require('../img/img1.png')} alt="svg" className='img-fluid' />
                        </Col>
                        <Col md={5} className='justify-content-center d-flex flex-column'>
                            <h1 className='fw-bold'>A special credit card <br /> made for Developers.</h1>
                            <p className='my-4 lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam adipisci odit est dolor quod numquam, modi, quaerat delectus in excepturi, cupiditate enim. Asperiores, dolor molestiae.</p>
                            <div className="d-flex">
                                <Button variant="transparent" className='text-small'>
                                    Get started with PayBuddy <FcRight />
                                </Button>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Container> */}
            <Container fluid className='py-5'>
                <Container>

                </Container>
            </Container>

        </>
    );
}

export default Home;