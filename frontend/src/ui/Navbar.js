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
                                    <SearchBar className="ml-auto"/>
                                )}
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </>
    )
}