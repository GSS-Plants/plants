import React from "react"
import {
    Col,
    Container,
    Row,
    Card,
    ListGroup,
    ListGroupItem,
    Navbar,
    Nav,
    Form,
    InputGroup,
    Button, CardColumns, CardDeck
} from "react-bootstrap";
import logo from "../assets/logo-filler.png";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPlants} from "../store/plant";
import {PlantCard} from "./plantSearch";

export const Search = () => {

    // Tell this component that it needs to watch for items that live outside of this component.
    // This is how we make sure this component looks for our data from Redux's call to the backend.
    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllPlants())
    }
    React.useEffect(initialEffects, [dispatch])

    // Render our misquotes constant - before we have our data, render the skeleton.
    // After we have our data, render the full object with our data.
    const plants = useSelector((state) => state.plants ? state.plants : [])
    return (
        <>
            <Container>
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
                            <Nav.Link href="/search">Search</Nav.Link>
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

        <h1><b>Search Results</b></h1>
        <CardDeck>
            {
                plants.map(plant => <PlantCard plant={plant} key={plant.plantId}/>)

            }
        </CardDeck>
        </Container>
</>
)
}
