import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import React from "react";

export function PlantCard(props) {
    const {plant} = props
    const growths = plant.plantGrowthHabit.split(', ')
    const growth = growths[0]

    switch (growth) {
        case 'Graminoid': return "frontend/src/assets/logo-filler.png";
        case 'Subshrub': return "frontend/src/assets/subshrub.png";
        case 'Herb': return "frontend/src/assets/herb.png"
        case 'Nonvascular': return "frontend/src/assets/nonvascular.png"
        case 'Shrub': return "frontend/src/assets/shrub.png"
        case 'Tree': return "frontend/src/assets/tree.png"
        case 'Vine': return "frontend/src/assets/vine.png"
        case 'Lichenous': return "frontend/src/assets/lichenous.png"
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

