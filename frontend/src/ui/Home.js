import React from 'react'
import {Row, Col, Jumbotron, Button, Form, Card, ListGroup, ListGroupItem, Navbar} from 'react-bootstrap'
import "./Styles.css"
import logo from "../assets/logo-filler.png";

export const Home = () => {
    return (
        <div id="container">
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
                <Col>
                    <Jumbotron className="jumbotron jumbotron-fluid">
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col id="cardA">
                    <Card style={{width: '18rem'}} id="cardd">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1509937528035-ad76254b0356?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=924&q=80"/>
                        <Card.Body>
                            <Card.Title>About Us!</Card.Title>
                            <Card.Text>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam facere sunt veritatis.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Samuel Martinez</ListGroupItem>
                            <ListGroupItem>Kirsten Crocker</ListGroupItem>
                            <ListGroupItem>Massimo Bouchentouf</ListGroupItem>
                            <ListGroupItem>Gabriella Hawkins</ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={{span:10,offset:1}}>
                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="What kind of plant do you have?"/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col id="buttcall">
                    <Button id="Butt">Learn More</Button>
                </Col>
            </Row>
        </div>
    )
}
