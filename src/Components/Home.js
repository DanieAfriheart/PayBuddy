import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// import { IconName } from "react-icons/fc";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Home = () => {

    const handleNewsletter = () => {
        alert('gbemidebe');
    }

    return (
        <>
            <Container fluid className='pt-5 bg-light d-flex align-items-center hero'>
                <Container className='h-100 text-center'>
                    <div className="header">
                        <h1 className='fw-bold display-4'>A special credit card <br /> made for Developers.</h1>
                        <p className='my-4 col-md-5 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam adipisci odit est dolor quod numquam, modi, quaerat delectus in excepturi, cupiditate enim. Asperiores, dolor molestiae.</p>
                    </div>
                    <Form className="d-flex border rounded p-1 col-md-6 mx-auto mb-5">
                        <Form.Control
                            type="Input"
                            placeholder="Subscribe to our newsletter"
                            className="me-2"
                            aria-label="Search"
                            style={{ border: 'none' }}
                        />
                        <Button variant="dark" onClick={handleNewsletter}>Subscribe</Button>
                    </Form>
                    <div className='heroImg h-100 mx-auto'>
                        <img className='img-fluid heroImg' src={require('../img/heroImg.jpg')} alt="" />
                    </div>
                </Container>
            </Container>
            <Container fluid className='py-5 bgCustom my-3'>
                <Container>
                    <Row className='h-100 justify-content-between rounded rounded-4' g={3}>
                        <Col md={6} className='justify-content-center d-flex flex-column'>
                            <h1 className='fw-bold'>A special credit card <br /> made for Developers.</h1>
                            <p className='my-4 col-md-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam adipisci odit est dolor quod numquam, modi, quaerat delectus in excepturi, cupiditate enim. Asperiores, dolor molestiae.</p>
                            {/* <Button>Create free account</Button> */}
                            <div className="d-flex">

                                <Button variant="dark">
                                    Create free account
                                </Button>
                                <Button variant="transparent">
                                    Login
                                </Button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <img src={require('../img/ladies.png')} alt="" className='img-fluid' />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className='py-5 bgCustom my-3'>
                <Container>
                    <Row className='h-100 justify-content-between rounded rounded-4' g={3}>
                        <Col md={6}>
                            <img src={require('../img/trans.svg')} alt="svg" className='img-fluid' />
                        </Col>
                        <Col md={6} className='justify-content-center d-flex flex-column'>
                            <h1 className='fw-bold'>A special credit card <br /> made for Developers.</h1>
                            <p className='my-4 col-md-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam adipisci odit est dolor quod numquam, modi, quaerat delectus in excepturi, cupiditate enim. Asperiores, dolor molestiae.</p>
                            {/* <Button>Create free account</Button> */}
                            <div className="d-flex">

                                <Button variant="dark">
                                    Create free account
                                </Button>
                                <Button variant="transparent">
                                    Login
                                </Button>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default Home;