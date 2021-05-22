import React from 'react'
import {Row, Col, Jumbotron, Button, Form, Card, ListGroup, ListGroupItem, Navbar} from 'react-bootstrap'
import "./Styles.css"
import logo from "../assets/logo-filler.png";

export const Home = () => {
    return (
        <div  id="container">

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Replace me with the real Navbar
                </Navbar.Brand>
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
            <h2>This is how you use the site</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem, consequatur cumque debitis dignissimos dolore dolorum eius ex labore modi nihil numquam omnis quaerat qui quisquam ratione repellat, sunt unde! Animi culpa magni molestias tenetur! Dolorum neque officiis perspiciatis rem voluptate. Dolorem fuga minima quasi, recusandae repellendus rerum tenetur ullam. Deleniti ratione tempore unde voluptates. Adipisci asperiores autem eos ipsum minus nesciunt nulla quis veniam. Accusamus eius excepturi expedita illo maiores non nulla officiis porro possimus voluptas! Ab inventore, totam!</p>
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
