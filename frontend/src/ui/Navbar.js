import {Button, Form, InputGroup, Nav, Navbar, Modal} from "react-bootstrap";
import logo from "../assets/logo-filler.png";
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {Formik} from "formik";
import * as Yup from "yup";
import {httpConfig} from "../utils/httpConfig";
import {SearchBar} from "./SearchBar";
import {useDispatch, useSelector} from "react-redux";
import {fetchPlantsByCommonName} from "../store/plant";
import { useHistory } from "react-router-dom";
import {SignUpModal} from "./sign-in-up/SignUpModal";
import {SignInModal} from "./sign-in-up/SigninModal";
import {SignOut} from "./sign-in-up/SignOut";
import {fetchAuth} from "../store/auth";


export const NavBar = () => {


    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const effects = () => {
        dispatch(fetchAuth());
    };
    const inputs = [];
    useEffect(effects, inputs);
    console.log("auth",auth)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const currentPath = useLocation().pathname
    console.log(currentPath)

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
<<<<<<< HEAD
                            <Nav.Link onClick={handleShow} className="text-light">Sign up / Sign in</Nav.Link>

                        <Form inline as={InputGroup} className="w-50">
                            <Form.Control type="text" placeholder="Search for plants"/>
                            <InputGroup.Append><Button variant="outline-dark">Go</Button></InputGroup.Append>
                        </Form>
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
=======
                            {auth ? (
                                <SignOut/>
                            ):(
                                <>
                                <SignUpModal/>
                                <SignInModal/>
                                </>
                            )
                            }





                            {currentPath !== '/' && (
                                    <SearchBar/>
                            )}

                        </Navbar.Collapse>
                    </Navbar>


                </div>
>>>>>>> develop
            </div>
        </>
    )
}
