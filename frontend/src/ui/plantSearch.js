import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import React from "react";

export function PlantCard(props){

const {plant} = props

return(
    <>
<Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title><b>{plant.plantCommonName}</b></Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroupItem><i>{plant.plantScientificName}</i></ListGroupItem>
        <ListGroupItem><b>Duration:{plant.plantDuration}</b></ListGroupItem>
        <ListGroupItem><b>Growth Habit:{plant.plantGrowthHabit}</b></ListGroupItem>
        <ListGroupItem><b>Toxicity:{plant.plantToxicity}</b></ListGroupItem>
    </ListGroup>
    <Card.Body>
        <Card.Link href="#">More Details</Card.Link>
    </Card.Body>
</Card>
    </>)
}

