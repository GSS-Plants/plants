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
        <div id="container">
            <div id="theNav">
                <Navbar variant="light" expand="xl">
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

                        </Nav>
                        <Nav.Link href="#loginModal" className="text-light">Sign up / </Nav.Link>
                        <Nav.Link href="#loginModal" className="text-light">Sign in</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>

            </div>
            <Row>
                <Col>
                    <Jumbotron id="jumone" className="jumbotron jumbotron-fluid">
                        <Jumbotron id="thejum">
                            <h1 id="logo"><b>I WILL BE YOUR LOGO!!</b></h1>
                        </Jumbotron>
                        <Form.Group id="search">
                            <Form.Control size="lg" type="text" placeholder="What kind of plant do you have?"/>
                        </Form.Group>
                        <Row>
                            <Col id="buttcall">
                                <Button id="Butt" class="btn btn">Learn More</Button>
                            </Col>
                        </Row>
                    </Jumbotron>
                </Col>
            </Row>
            <h2>This is how you use the site</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem, consequatur cumque debitis dignissimos
                dolore dolorum eius ex labore modi nihil numquam omnis quaerat qui quisquam ratione repellat, sunt unde!
                Animi culpa magni molestias tenetur! Dolorum neque officiis perspiciatis rem voluptate. Dolorem fuga
                minima quasi, recusandae repellendus rerum tenetur ullam. Deleniti ratione tempore unde voluptates.
                Adipisci asperiores autem eos ipsum minus nesciunt nulla quis veniam. Accusamus eius excepturi expedita
                illo maiores non nulla officiis porro possimus voluptas! Ab inventore, totam!</p>
            <Row>
                <Col id="cardA">
                    <Card style={{width: '18rem'}} id="cardd">
                        <Card.Img variant="top"
                                  src="https://images.unsplash.com/photo-1509937528035-ad76254b0356?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=924&q=80"/>
                        <Card.Body>
                            <Card.Title>Kirsten Crocker</Card.Title>
                            <Card.Text>
                                <hr/>
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
                            <Card.Title>Samuel Martinez</Card.Title>

                            <Card.Text>
                                <hr/>
                                I am an Albuquerque native and two-time boot camp graduate. A few of my favorite things:
                                reading, backpacking, keyboard shortcuts and board games. I got a BA from Whitman
                                College in Walla Walla, Washington, but had to come back for the mountains, the chile
                                and the people. I learned everything I could from work in a Verizon call center before
                                signing up for Deep Dive Java + Android in 2020 and Fullstack in 2021.
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
                            <Card.Title>Simo</Card.Title>
                            <Card.Text>
                                <hr/>
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

                            <Card.Title>Gabriella Hawkins</Card.Title>
                            <Card.Text>
                             <hr/>
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
