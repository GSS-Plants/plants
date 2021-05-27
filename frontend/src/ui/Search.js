import React from "react"
import {Col, Container, Row, Card, ListGroup, ListGroupItem} from "react-bootstrap";

export const Search = () => {
    return (
        <>
            <Container>


            <h1><b>Search</b></h1>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.calloways.com/wp-content/uploads/grafted-cactus.jpg" />
                <Card.Body>
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
                    <Card.Link href="#">More Details</Card.Link>
                    <Card.Link href="#">Another Search</Card.Link>
                </Card.Body>
            </Card>
            </Container>
        </>
    )
}
