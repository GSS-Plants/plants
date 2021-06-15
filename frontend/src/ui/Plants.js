import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from 'react'
import {Row, Col, ListGroup, ListGroupItem,} from 'react-bootstrap'




export const Plants = () => {
    return (


        <div id="container">
            <Row>
                <Col id="Pcol" lg={{span:10,offset:1}}>
                    <h1>Hi, My Name Is:</h1>
                    <h2>{plant.plantCommonName}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup>
                        <ListGroupItem>Bloom Period: {plant.plantBloomPeriod}</ListGroupItem>
                        <ListGroupItem>${plant.plantCommonName}</ListGroupItem>
                        <ListGroupItem>${plant.plantDuration}</ListGroupItem>
                        <ListGroupItem>${plant.plantDroughtTolerance}</ListGroupItem>
                        <ListGroupItem>${plant.plantGrowthHabit}</ListGroupItem>
                        <ListGroupItem>${plant.plantGrowthPeriod}</ListGroupItem>
                        <ListGroupItem>${plant.plantMatureHeight}</ListGroupItem>
                        <ListGroupItem>${plant.plantMinFrostFreeDays}</ListGroupItem>
                        <ListGroupItem>${plant.plantPrecipitationMax}</ListGroupItem>
                        <ListGroupItem>${plant.plantPrecipitationMin}</ListGroupItem>
                        <ListGroupItem>${plant.plantRootDepthMinimum}</ListGroupItem>
                        <ListGroupItem>${plant.plantScientificName}</ListGroupItem>
                        <ListGroupItem>${plant.plantShadeTolerance}</ListGroupItem>
                        <ListGroupItem>${plant.plantToxicity}</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>

        </div>
    )
}
