import {Button, Form, InputGroup, Nav, Navbar, Modal} from "react-bootstrap";
import logo from "../assets/logo-filler.png";
import React, {useState} from "react";
import {useLocation} from "react-router";
import {Formik} from "formik";
import * as Yup from "yup";
import {httpConfig} from "../utils/httpConfig";
import {SearchBar} from "./SearchBar";
import {useDispatch} from "react-redux";
import {fetchPlantsByCommonName} from "../store/plant";
import { useHistory } from "react-router-dom";
import {SignUpModal} from "./sign-in-up/SignUpModal";
import {SignInModal} from "./sign-in-up/SigninModal";
import {SignOut} from "./sign-in-up/SignOut";


export const NavBar = () => {
    /*
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
*/
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

                            <SignUpModal/>
                            <SignInModal/>
                                <SignOut/>


                            {currentPath !== '/' && (
                                    <SearchBar/>
                            )}

                        </Navbar.Collapse>
                    </Navbar>


                </div>
            </div>
        </>
    )
}
