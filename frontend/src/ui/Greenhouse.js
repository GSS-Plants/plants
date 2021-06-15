import React, {useState} from "react"
// import "./greenhouse.css"
import {Button, CardGroup, Col, Container, Form, InputGroup, Modal, Nav, Navbar, Row} from "react-bootstrap";
import logo from "../assets/logo-filler.png";



import "./greenhouse-js.js"
import {GreenhousePlant} from "./GreenhousePlant";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfilePlantsByProfileId} from "../store/profile-plant";

export const Greenhouse = (props) => {

const profileId = props.match.params.profileId

    const dispatch = useDispatch()
    const initialEffects = () => {
    dispatch(fetchProfilePlantsByProfileId(profileId))
    }
    React.useEffect(initialEffects, [dispatch])

    // Render our misquotes constant - before we have our data, render the skeleton.
    // After we have our data, render the full object with our data.
    const plants = useSelector((state) => state.profilePlants ? state.profilePlants : [])

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



            {/*<header>*/}
            {/*<h1 className="big-title translate" data-speed="0.1">GREENHOUSE</h1>*/}

            {/*<img src="../assets/standingPlant.png" className="mountain1 translate" data-speed="-0.2" alt=""/>*/}
            {/*<img src="../assets/shelves.png" className="mountain2 translate" data-speed="0.4" alt=""/>*/}
            {/*</header>*/}


            {/*<section>*/}
            {/*    <div className="shadow"/>*/}

            {/*    <div className="container">*/}
            {/*        <div className="content opacity">*/}


            {/*            <div id="greenhouse">*/}
            {/*                <h2 className="title">*/}
            {/*                    Greenhouse*/}
            {/*                    <div className="border"/>*/}
            {/*                </h2>*/}


            {/*                <div className="container" id="plantsMovable">*/}
            {/*                    <div className="drop-zone" id="A">*/}
            {/*                        <div id="myDraggableElement" draggable="true"/>*/}
            {/*                    </div>*/}
            {/*                    <div className="drop-zone" id="B"/>*/}
            {/*                    <div className="drop-zone" id="C"/>*/}
            {/*                    <div className="drop-zone" id="D"/>*/}
            {/*                    <div className="drop-zone" id="E"/>*/}
            {/*                    <div className="drop-zone" id="F"/>*/}
            {/*                    <div className="drop-zone" id="G"/>*/}
            {/*                    <div className="drop-zone" id="H"/>*/}
            {/*                    <div className="drop-zone" id="I"/>*/}
            {/*                </div>*/}


            {/*                <div className="container" id="greenhouseContainer">*/}
            {/*                    /!*<p class="text">I'm baby mixtape letterpress raw denim you probably haven't heard of them twee sustainable vexillologist brooklyn blog shaman 90's adaptogen kinfolk vinyl. La croix palo santo lomo bespoke kinfolk 90's photo booth cardigan literally marfa mlkshk selfies street art direct trade fanny pack.</p>*!/*/}
            {/*                    <button type="button" id="addNewPlant" className="btn btn-light"><strong>Add New*/}
            {/*                        Plant</strong></button>*/}
            {/*                    <button type="button" id="compostPlant" className="btn btn-light"><strong>Compost Plant*/}
            {/*                        X_X</strong></button>*/}
            {/*                </div>*/}
            {/*            </div>*/}


            {/*            <div className="container" id="reminders">*/}
            {/*                <h2 className="title">*/}
            {/*                    Reminders*/}
            {/*                    <div className="border"/>*/}
            {/*                </h2>*/}
            {/*                <p>*/}
            {/*                    <ul>*/}
            {/*                        <li>Name of plant</li>*/}
            {/*                        <li>Frequency</li>*/}
            {/*                    </ul>*/}
            {/*                </p>*/}
            {/*                <button type="button" id="editReminders" className="btn btn-light"><strong>Edit*/}
            {/*                    Reminders</strong></button>*/}
            {/*            </div>*/}


            {/*        </div>*/}
            {/*    </div>*/}

            {/*</section>*/}


        </>
 )
}
