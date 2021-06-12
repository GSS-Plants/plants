import {Button, Form, InputGroup, Nav, Navbar, Modal} from "react-bootstrap";
import logo from "../assets/logo-filler.png";
import React, {useState} from "react";
import {useLocation} from "react-router";
import {Formik} from "formik";
import * as Yup from "yup";
import {httpConfig} from "../utils/httpConfig";
import {searchBar} from "./searchBar";
import {useDispatch} from "react-redux";
import {fetchPlantsByCommonName} from "../store/plant";
import { useHistory } from "react-router-dom";

export const NavBar = () => {
    const history = useHistory()
    const search = {
        searchText: ""
    }
    const dispatch = useDispatch()

    const doSearch = (values, {resetForm, setStatus}) => {
        const searchText = values.searchText
        console.log(searchText)
        httpConfig.get(`/apis/plant/search-common-name/${searchText}`)
            .then(reply => {
                console.log(reply)
                let {message, type} = reply;
                    if (reply.status === 200) {
                        resetForm();
                        dispatch(fetchPlantsByCommonName(searchText))
                        history.push('/search')
                    }
                    if (reply.status === 404) {
                        //cry
                    }
                    setStatus({message, type});
                }
            );
    };




    const validator = Yup.object().shape({
        searchText: Yup.string()
            .required("search text is required"),
    });


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const currentPath = useLocation().pathname

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

                            {currentPath !== '/' && (<>
                                <Formik
                                    initialValues={search}
                                    onSubmit={doSearch}
                                    validationSchema={validator}
                                >
                                    {searchBar}

                                </Formik>
                            </>)}

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
