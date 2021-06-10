import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import React from "react";

export function PlantCard(props) {
    const {plant} = props
    const growths = plant.plantGrowthHabit.split(', ')
    const growth = growths[0]

    switch (growth) {
        case 'Shrub': return "frontend/src/assets/shrub.png";
        case 'Stalks': return "frontend/src/assets/stalks.png";
    }
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    {growths.map(growth => {<img src={}></img>})}
                    <Card.Title><b>{plant.plantCommonName}</b></Card.Title>
                </Card.Body>
            </Card>
        </>)
}

