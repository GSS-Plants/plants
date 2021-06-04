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

            <h1><b>Search</b></h1>
            <CardDeck>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>plantCommonName</Card.Title>
                    <Card.Text>
                        <b>plantScientificName</b>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>plantDuration</ListGroupItem>
                    <ListGroupItem>plantGrowthHabit</ListGroupItem>
                    <ListGroupItem>plantToxicity</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">More Details</Card.Link>
                </Card.Body>
            </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>plantCommonName</Card.Title>
                        <Card.Text>
                            <b>plantScientificName</b>
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>plantDuration</ListGroupItem>
                        <ListGroupItem>plantGrowthHabit</ListGroupItem>
                        <ListGroupItem>plantToxicity</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">More Details</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>plantCommonName</Card.Title>
                        <Card.Text>
                            <b>plantScientificName</b>
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>plantDuration</ListGroupItem>
                        <ListGroupItem>plantGrowthHabit</ListGroupItem>
                        <ListGroupItem>plantToxicity</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">More Details</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>plantCommonName</Card.Title>
                        <Card.Text>
                            <b>plantScientificName</b>
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>plantDuration</ListGroupItem>
                        <ListGroupItem>plantGrowthHabit</ListGroupItem>
                        <ListGroupItem>plantToxicity</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">More Details</Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
            </Container>
        </>
    )
}
