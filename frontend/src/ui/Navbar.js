import {Button, Form, InputGroup, Nav, Navbar, Container} from "react-bootstrap";
import logo from "../assets/logo-filler.png";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../store/auth";
import {SignUpModal} from "./sign-in-up/SignUpModal";


export const NavBar= () => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const effects = () => {
        dispatch(fetchAuth());
    };
    const inputs = [];
    useEffect(effects, inputs);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const isModalOpen = ()=> {
        if(!auth) {
            return !auth
        } else if(show === true && auth  ) {
            return true
        }
    }
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
                            {isModalOpen()  &&  (
                                <>
                                    <SignUpModal/>
                                    {/*<SignInModal show={show} handleClose={handleClose} handleShow={handleShow}/>*/}
                                </>
                            )}
                        </Nav>

                        <Form inline as={InputGroup} className="w-50">
                            <Form.Control type="text" placeholder="Search for plants"/>
                            <InputGroup.Append><Button variant="outline-success">Go</Button></InputGroup.Append>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

            </div>
            </div>
</>
)
}