import React, {useState} from 'react'
import {
    Row,
    Col,
    Button,
    Form,
    Navbar,
    Image,
    Container,
    Nav,
    InputGroup,
    Modal,
    ListGroup,
    ListGroupItem,
    Badge,
} from 'react-bootstrap'
import "./Styles.css"
import logo from "../assets/logo-filler.png";
import "./Navbar"
import {useDispatch, useSelector} from "react-redux";
import {fetchPlantByPlantId} from "../store/plant";
import {AddToGreenhouse} from "./AddToGreenhouse";

export const Plants = (props) => {
    const plantId = props.plantId

    const plant = useSelector((state) => state.plants ? state.plants.filter(plant => plant.plantId === plantId)[0] : [])
    console.log("Plants.js", plant)

    return (


        <div id="container">
            <Row>
                <Col id="Pcol" lg={{span:10,offset:1}} className="text-center">
                    <h1>Hi, My Name Is:</h1>
                    <h2><i>"{plant.plantCommonName}"</i></h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup className="text-center">
                        <ListGroupItem><b>Scientific Name :</b> {plant.plantScientificName}</ListGroupItem>
                        <ListGroupItem><b>Bloom Period :</b> {plant.plantBloomPeriod}</ListGroupItem>
                        <ListGroupItem><b>Duration :</b> {plant.plantDuration}</ListGroupItem>
                        <ListGroupItem><b>Drought Tolerance :</b> {plant.plantDroughtTolerance}</ListGroupItem>
                        <ListGroupItem><b>Growth Habit :</b> {plant.plantGrowthHabit}</ListGroupItem>
                        <ListGroupItem><b>Growth Period :</b> {plant.plantGrowthPeriod}</ListGroupItem>
                        <ListGroupItem><b>Mature Height :</b> {plant.plantMatureHeight} feet</ListGroupItem>
                        <ListGroupItem><b>Min Frost Free Days :</b> {plant.plantMinFrostFreeDays}</ListGroupItem>
                        <ListGroupItem><b>Precipitation Max :</b> {plant.plantPrecipitationMax} inches per year</ListGroupItem>
                        <ListGroupItem><b>Precipitation Min :</b> {plant.plantPrecipitationMin} inches per year</ListGroupItem>
                        <ListGroupItem><b>Root Depth Min :</b> {plant.plantRootDepthMinimum} inches</ListGroupItem>
                        <ListGroupItem><b>Shade Tolerance :</b> {plant.plantShadeTolerance}</ListGroupItem>
                        <ListGroupItem><b>Toxicity :</b> {plant.plantToxicity}</ListGroupItem>
                    </ListGroup>
                    <AddToGreenhouse plantId={plant.plantId}/>
                </Col>
            </Row>
        </div>
                            )

                            }

