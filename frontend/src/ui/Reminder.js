import React from "react"
import {Button, Col, Container, Form, Image, Navbar, Row} from "react-bootstrap";
import logo from "../assets/logo-filler.png"

export const Reminder = () => {
    return (
        <>
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
            <Container className="text-center">
                <Row>
                    <Col>
                        <h1 className="my-3">Schedule A Reminder</h1>
                        <Image src={logo} className="my-4 p-4 border border-dark"/>
                        <h2>(Plant Name)</h2>
                    </Col>
                </Row>
            </Container>
            <Container className="text-center">
                <Form>
                    <Row className="justify-content-center">
                        <Col md={3} className="my-2">
                            <Form.Group controlId="datePicker">
                                <Form.Label>When to start reminders:</Form.Label>
                                <Form.Control type="date" placeholder="Number of days"/>
                            </Form.Group>
                        </Col>
                        <Col md={3} className="my-2">
                            <Form.Group controlId="intervalPicker">
                                <Form.Label>Days between reminders:</Form.Label>
                                <Form.Control type="number" htmlSize={4} min="1" max="365" placeholder="Number of days"/></Form.Group>
                        </Col>
                    </Row>
                    <Row  className="justify-content-center">
                        <Col md={6}>
                            <Button variant="primary" size="lg" block>
                                Save reminder </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
}