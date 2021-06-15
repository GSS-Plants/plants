import React, {useState} from "react"
import "./greenhouse.css"
import bgimage from "../assets/shelves.png"


import {Button, CardGroup, Col, Container, Form, InputGroup, Jumbotron, Modal, Nav, Navbar, Row} from "react-bootstrap";

import logo from "../assets/logo-filler.png";


import "./greenhouse-js.js"


import {GreenhousePlant} from "./GreenhousePlant";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfilePlantsByProfileId} from "../store/profile-plant";

export const Greenhouse = () => {


    const dispatch = useDispatch()

    const plants = useSelector((state) => state.profilePlants ? state.profilePlants : [])


    const initialEffects = () => {
        dispatch(fetchProfilePlantsByProfileId())
    }
    React.useEffect(initialEffects, [])



    console.log(plants)

    return (
        <>

                    <h1 className="display-4">GREENHOUSE</h1>
            <Jumbotron id="greenJumbo" className="jumbotron jumbotron-fluid" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
                <div className="container">


                    <CardGroup id="greenCard">
                        {plants.map(plant => <GreenhousePlant plant={plant} key={plant.plantId}/>)}
                    </CardGroup>
                    </div>

            </Jumbotron>



        </>
    )
        }




