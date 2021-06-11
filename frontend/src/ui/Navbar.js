import {Button, Form, InputGroup, Nav, Navbar, Container} from "react-bootstrap";
import logo from "../assets/logo-filler.png";
import React from "react";
import {useLocation} from "react-router";


export const NavBar= () => {
    const location = useLocation().pathname
    console.log(location)
    return (
        <>

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
                            <Nav.Link href="#loginModal" className="text-light">Sign up / Sign in</Nav.Link>
                        </Nav>

                        {location !== '/' && (<><Form inline as={InputGroup} className="w-50">
                            <Form.Control type="text" placeholder="Search for plants"/>
                            <InputGroup.Append><Button variant="outline-success">Go</Button></InputGroup.Append>
                        </Form></>)}
                    </Navbar.Collapse>
                </Navbar>

            </div>
            </div>
</>
)
}