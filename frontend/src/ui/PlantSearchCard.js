import {Button, Card, Form, InputGroup, ListGroup, ListGroupItem, Nav, Navbar} from "react-bootstrap";
import React, {useState} from "react";
import logo from "../assets/logo-filler.png";
import "./Styles.css"
import {Formik} from "formik";

import {PlantModal} from "./PlantModal";
import {AddToGreenhouse} from "./AddToGreenhouse";
export function PlantSearchCard(props){

const {plant} = props

return(
            <Card className='m-4'>
    <Card.Body >
        <Card.Title><b>{plant.plantCommonName}</b><br/>
        <i className='text-black-50 font-weight-light'>{plant.plantScientificName}</i></Card.Title>

    </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroupItem><b>Duration:  {plant.plantDuration}</b></ListGroupItem>
        <ListGroupItem><b>Growth Habit:  {plant.plantGrowthHabit}</b></ListGroupItem>
        <ListGroupItem><b>Toxicity:  {plant.plantToxicity}</b></ListGroupItem>
    </ListGroup>
    <Card.Body>
        <PlantModal  plantId={plant.plantId}/><AddToGreenhouse plantId={plant.plantId}/>
    </Card.Body>
</Card>

    )
}

