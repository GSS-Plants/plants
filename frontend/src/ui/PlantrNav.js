import React from "react"

import logo from "../assets/logo-filler.png"
import {Button, Col, Container, Form, InputGroup, Nav, Navbar, Row} from "react-bootstrap";

export const PlantrNav = () => {
    return (
        <>
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
                <Navbar.Collapse id="navbar-links">
                    <Container fluid className="px-0">
                        <Row className="w-100">
                            <Col>
                                <Nav className="ms-auto">
                                    <Nav.Link href="/reminder">Reminder</Nav.Link>
                                    <Nav.Link href="#search">Search</Nav.Link>
                                    <Nav.Link href="#plant">Plant</Nav.Link>
                                    <Nav.Link href="#greenhouse">Greenhouse</Nav.Link>
                                    <Nav.Link href="#contact">Contact Team Plants</Nav.Link>
                                </Nav>
                            </Col>
                            <Col xl={5} className="justify-content-between">
                                <Form inline as={InputGroup}>
                                <Form.Control type="text" placeholder="Search for plants"/>
                                <InputGroup.Append><Button variant="outline-success">Go</Button></InputGroup.Append>
                            </Form>
                            </Col>
                            <Col xs={{order: "first"}} xl={{span: 2, order: "last"}} className="px-xl-0">
                                <Button variant="success">Sign in/Sign up</Button>
                            </Col>
                        </Row>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}