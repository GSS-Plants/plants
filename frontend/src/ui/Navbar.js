import {Button, Form, InputGroup, Nav, Navbar, Modal} from "react-bootstrap";
import logo from "../assets/logo-filler.png";
import React, {useState} from "react";
import {useLocation} from "react-router";


export const NavBar = () => {
    const location = useLocation().pathname

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>

            <div id="container">
                <div id="theNav">
                    <Navbar variant="light" expand="xl">
                        <Navbar.Brand href="/">
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
                                <Nav.Link href="/search">Search</Nav.Link>
                                <Nav.Link href="/plants">Plant</Nav.Link>
                                <Nav.Link href="/greenhouse">Greenhouse</Nav.Link>
                                {/*<Nav.Link href="#contact">Contact Team Plants</Nav.Link>*/}

                            </Nav>
                            <Nav.Link onClick={handleShow} className="text-light">Sign up / Sign in</Nav.Link>

                            {location !== '/' && (<><Form inline as={InputGroup} className="w-50">
                                <Form.Control type="text" placeholder="Search for plants"/>
                                <InputGroup.Append><Button variant="outline-success">Go</Button></InputGroup.Append>
                            </Form></>)}
                    </Navbar.Collapse>
                </Navbar>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            I will not close if you click outside me. Don't even try to press
                            escape key.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary">Understood</Button>
                        </Modal.Footer>
                    </Modal>
            </div>
            </div>
</>
)
}