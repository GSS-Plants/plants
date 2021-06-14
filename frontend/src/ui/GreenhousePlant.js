import {Card, Image, ListGroup, ListGroupItem} from "react-bootstrap";
import React from "react";

export function GreenhousePlant(props) {
    const {plant} = props
    const growths = plant.plantGrowthHabit.split(', ')
    const growth = growths[0]

    function imageFinder (growth) {
        switch (growth) {
            case 'Graminoid':
                return <Image src="frontend/src/assets/logo-filler.png"/>
            case 'Subshrub':
                return <Image src="frontend/src/assets/subshrub.png"/>
            case 'Herb':
                return <Image src="frontend/src/assets/herb.png"/>
            case 'Nonvascular':
                return <Image src="frontend/src/assets/nonvascular.png"/>
            case 'Shrub':
                return <Image src="frontend/src/assets/shrub.png"/>
            case 'Tree':
                return <Image src="frontend/src/assets/tree.png"/>
            case 'Vine':
                return <Image src="frontend/src/assets/vine.png"/>
            case 'Lichenous':
                return <Image src="frontend/src/assets/lichenous.png"/>
        }
    }
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    {imageFinder(growth)}
                    <Card.Title><b>{plant.plantCommonName}</b></Card.Title>
                </Card.Body>
            </Card>
        </>)
}

