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
        </>
    )
}