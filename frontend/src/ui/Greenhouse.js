import React from "react"
import {Row, Col, Button, Form, Navbar, Image, Container, Nav, InputGroup,} from 'react-bootstrap'
import "./greenhouse.css"
import "./greenhouse-js"

export const Greenhouse = () => {
    return (
        <>
            <header>
                <h1 className="big-title translate" data-speed="0.1">GREENHOUSE</h1>

                <img
                    src="standingPlant.png"
                    className="mountain1 translate"
                    data-speed="-0.2"
                    alt=""></img>
                <img
                    src="shelves.png"
                    className="mountain2 translate"
                    data-speed="0.4"
                    alt=""></img>
            </header>


            <section>
                <div className="shadow"></div>

                <div className="container">
                    <div className="content opacity">


                        <div id="greenhouse">
                            <h2 className="title">
                                Greenhouse
                                <div className="border"></div>
                            </h2>


                            <div className="container" id="plantsMovable">
                                <div className="drop-zone" id="A">
                                    <div id="myDraggableElement" draggable="true"></div>
                                </div>
                                <div className="drop-zone" id="B"></div>
                                <div className="drop-zone" id="C"></div>
                                <div className="drop-zone" id="D"></div>
                                <div className="drop-zone" id="E"></div>
                                <div className="drop-zone" id="F"></div>
                                <div className="drop-zone" id="G"></div>
                                <div className="drop-zone" id="H"></div>
                                <div className="drop-zone" id="I"></div>
                            </div>


                            <div class="container" id="greenhouseContainer">
                                <!--            <p class="text">I'm baby mixtape letterpress raw denim you probably haven't heard of them twee sustainable vexillologist brooklyn blog shaman 90's adaptogen kinfolk vinyl. La croix palo santo lomo bespoke kinfolk 90's photo booth cardigan literally marfa mlkshk selfies street art direct trade fanny pack.</p>-->
                                <button type="button" id="addNewPlant" class="btn btn-light"><strong>Add New
                                    Plant</strong></button>
                                <button type="button" id="compostPlant" class="btn btn-light"><strong>Compost Plant
                                    X_X</strong></button>
                            </div>
                        </div>


                        <div class="container" id="reminders">
                            <h2 class="title">
                                Reminders
                                <div class="border"></div>
                            </h2>
                            <p>
                                <ul>
                                    <li>Name of plant</li>
                                    <li>Frequency</li>
                                </ul>
                            </p>
                            <button type="button" id="editReminders" class="btn btn-light"><strong>Edit
                                Reminders</strong></button>
                        </div>


                    </div>
                </div>
            </section>


        </>
)
}

