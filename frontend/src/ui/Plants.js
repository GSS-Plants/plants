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
} from 'react-bootstrap'
import "./Styles.css"
import logo from "../assets/logo-filler.png";
import "./Navbar"
import {useDispatch, useSelector} from "react-redux";
import {fetchPlantByPlantId} from "../store/plant";

export const Plants = (props) => {
    const plantId = props.plantId

    const dispatch = useDispatch()

    const plant = useSelector((state) => state.plants ? state.plants.filter(plant => plant.plantId === plantId)[0] : [])
    console.log("Plants.js", plant)

    const initialEffects = () => {
        dispatch(fetchPlantByPlantId(plantId))
    }
    React.useEffect(initialEffects, [])
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

