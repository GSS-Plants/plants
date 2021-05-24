import React from 'react'
import {
    Row,
    Col,
    Jumbotron,
    Button,
    Form,
    Card,
    ListGroup,
    ListGroupItem,
    Navbar,
    Nav,
    InputGroup
} from 'react-bootstrap'
import "./Styles.css"
import logo from "../assets/logo-filler.png";

export const Home = () => {
    return (
        <div  id="container">

            <Navbar bg="light" variant="light" expand="xl">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    plant.r
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-links"/>
                <Navbar.Collapse id="navbar-links" className="justify-content-between">
                    <Nav className="justify-content-between">
                        <Nav.Link href="/reminder">Reminder</Nav.Link>
                        <Nav.Link href="#search">Search</Nav.Link>
                        <Nav.Link href="#plant">Plant</Nav.Link>
                        <Nav.Link href="#greenhouse">Greenhouse</Nav.Link>
                        <Nav.Link href="#contact">Contact Team Plants</Nav.Link>
                        <Nav.Link href="#loginModal" className="text-success">Sign up / Sign in</Nav.Link>
                    </Nav>
                    <Form inline as={InputGroup} className="w-50">
                        <Form.Control type="text" placeholder="Search for plants"/>
                        <InputGroup.Append><Button variant="outline-success">Go</Button></InputGroup.Append>
                    </Form>
                </Navbar.Collapse>

            </Navbar>

            <Row>
                <Col >
                    <Jumbotron id="jumone"   className="jumbotron jumbotron-fluid">
                        <Jumbotron id="thejum">
                        <h1 id="logo"><b>I WILL BE YOUR LOGO!!</b></h1>
                        </Jumbotron>
                        <Form.Group id="search">
                            <Form.Control size="lg" type="text" placeholder="What kind of plant do you have?"/>
                        </Form.Group>
                        <Row>
                            <Col id="buttcall">
                                <Button id="Butt">Learn More</Button>
                            </Col>
                        </Row>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col id="cardA">
                    <Card style={{width: '18rem'}} id="cardd">
                        <Card.Img variant="top"
                                  src="https://images.unsplash.com/photo-1509937528035-ad76254b0356?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=924&q=80"/>
                        <Card.Body>
                            <ListGroupItem>Kirsten Crocker</ListGroupItem>
                            <Card.Title>About Us!</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam facere sunt
                                veritatis.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        </ListGroup>
                    </Card>
                </Col>

                <Col id="cardA">
                    <Card style={{width: '18rem'}} id="cardd">
                        <Card.Img variant="top"
                                  src="https://images.unsplash.com/photo-1509937528035-ad76254b0356?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=924&q=80"/>
                        <Card.Body>
                            <ListGroupItem>Samuel Martinez</ListGroupItem>
                            <Card.Title>About Us!</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam facere sunt
                                veritatis.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        </ListGroup>
                    </Card>
                </Col>

                <Col id="cardA">
                    <Card style={{width: '18rem'}} id="cardd">
                        <Card.Img variant="top"
                                  src="https://images.unsplash.com/photo-1509937528035-ad76254b0356?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=924&q=80"/>
                        <Card.Body>
                            <ListGroupItem>Simo</ListGroupItem>
                            <Card.Title>About Us!</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam facere sunt
                                veritatis.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        </ListGroup>
                    </Card>
                </Col>

                <Col id="cardA" class="col-md-3 mx-auto mb-5 text-center">
                    <Card style={{width: '18rem'}} id="cardd">
                        <Card.Img variant="top"
                                  src="https://images.unsplash.com/photo-1509937528035-ad76254b0356?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=924&q=80"/>
                        <Card.Body>
                            <ListGroupItem>Gabriella Hawkins</ListGroupItem>
                            <Card.Title>About Us!</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam facere sunt
                                veritatis.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        </ListGroup>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}
