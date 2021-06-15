import React, {useState} from "react"
// import "./greenhouse.css"

import {Button, CardGroup, Col, Container, Form, InputGroup, Modal, Nav, Navbar, Row} from "react-bootstrap";

import logo from "../assets/logo-filler.png";


import "./greenhouse-js.js"

import {GreenhousePlant} from "./GreenhousePlant";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfilePlantsByProfileId} from "../store/profile-plant";

export const Greenhouse = (props) => {



    const dispatch = useDispatch()

    const plants = useSelector((state) => state.profilePlants ? state.profilePlants : [])

    const initialEffects = () => {
        dispatch(fetchProfilePlantsByProfileId())
    }
    React.useEffect(initialEffects, [])


    console.log(plants)

    return (
        <>


            <div className="jumbotron jumbotron-fluid">
                <div className="container">

                    <h1 className="display-4">GREENHOUSE</h1>
                    <CardGroup>
                        {plants.map(plant => <GreenhousePlant plant={plant} key={plant.plantId}/>)}
                    </CardGroup>
                </div>
            </div>




            </>
            )
        }




