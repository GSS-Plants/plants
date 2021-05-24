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
    Button
} from "react-bootstrap";
import logo from "../assets/logo-filler.png";

export const Search = () => {
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

            <h1><b>Search</b></h1>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.calloways.com/wp-content/uploads/grafted-cactus.jpg" />
                <Card.Body>
                    <img src="https://miro.medium.com/max/1106/1*tAZ0DsBYgXTsn2BBLxlIIg.png" className={'img-fluid'} />
                    <Card.Title>Search</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
            </Container>
        </>
    )
}
