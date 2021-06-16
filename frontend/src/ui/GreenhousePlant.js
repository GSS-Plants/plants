import {Card, CardGroup, Image, ListGroup, ListGroupItem} from "react-bootstrap";
import React from "react";
import tree from "../assets/tree.png"
import graminoid from '../assets/logo-filler.png'
import subshrub from "../assets/subshrub.png"
import herb from "../assets/herb.png"
import nonvascular from "../assets/nonvascular.png"
import shrub from "../assets/shrub.png"
import vine from "../assets/vine.png"
import lichenous from "../assets/lichenous.png"
import Default from "../assets/nonessential-succulent.png"

export function GreenhousePlant(props) {
    const {plant} = props
    const growths = plant.plantGrowthHabit.split(', ')
    const growth = growths[0]

    function imageFinder (growth) {
        switch (growth) {
            case 'Graminoid':
                return <Image src={graminoid}/>
            case 'Subshrub':
                return <Image src={subshrub}/>
            case 'Forb/Herb':
                return <Image src={herb}/>
            case 'Nonvascular':
                return <Image src={nonvascular}/>
            case 'Shrub':
                return <Image src={shrub} />
            case 'Tree':
                return <Image src={tree}/>
            case 'Vine':
                return <Image src={vine}/>
            case 'Lichenous':
                return <Image src={lichenous}/>
            default:
                return <Image src={Default}/>
        }
    }
    return(
        <>
            {/*<CardGroup>*/}
                <Card className="m-4" id="gHCard">
                {/*<Card.Body>*/}
                    {/*{plant="plant.plantId"}*/}
                    {/*<Card.Img id="ghCardImg">*/}
                    <div id="ghPlant">{imageFinder(growth)}</div>
                    {/*</Card.Img>*/}
                        <Card.Title id="gHCardTitle">{plant.plantCommonName}</Card.Title>
                {/*</Card.Body>*/}
                </Card>
            {/*// </CardGroup>*/}


            {/*<ul>*/}
            {/*    <li>*/}
            {/*        {imageFinder(growth)}*/}
            {/*        <p>{plant.plantCommonName}</p>*/}
            {/*    </li>*/}
            {/*</ul>*/}



            {/*<Card id="ghCard">*/}
            {/*    <Card.Body id="ghCardBody">*/}
            {/*        {imageFinder(growth)}*/}
            {/*        /!*<Card.Title>{plant.plantCommonName}</Card.Title>*!/*/}
            {/*    </Card.Body>*/}
            {/*</Card>*/}




            {/*const greenhousePlants = [*/}
            {/*{*/}
            {/*    id: 'vine'*/}
            {/*    plant.plantCommonName: 'Vine'*/}
            {/*    thumb: '../assets/vine.png'*/}
            {/*},*/}
            {/*{*/}
            {/*    id: 'tree',*/}
            {/*    name: 'Tree'*/}
            {/*    thumb: '../assets/tree.png'*/}
            {/*},*/}
            {/*]*/}






        </>)
}

