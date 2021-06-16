import React, {useState} from "react"
import "./greenhouse.css"
import bgimage from "../assets/shelves.png"


import {
    Button,
    Card, CardColumns,
    CardGroup,
    Col,
    Container,
    Form,
    InputGroup,
    Jumbotron,
    Modal,
    Nav,
    Navbar,
    Row
} from "react-bootstrap";

import logo from "../assets/logo-filler.png";


import "./greenhouse-js.js"


import {GreenhousePlant} from "./GreenhousePlant";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfilePlantsByProfileId} from "../store/profile-plant";
import plant from "../store/plant";

export const Greenhouse = () => {


    const dispatch = useDispatch()

    const plants = useSelector((state) => state.profilePlants ? state.profilePlants : [])


    const initialEffects = () => {
        dispatch(fetchProfilePlantsByProfileId())
    }
    React.useEffect(initialEffects, [])



    console.log(plants)

    function imageFinder(growth) {
        
    }

    return (
        <>


            <Jumbotron id="greenJumbo" className="jumbotron jumbotron-fluid" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>

                <div className="container">
                <Container>
                    <h1 className="display-4"><b>GREENHOUSE</b></h1>
                    <Row>
                        <Col>
<CardColumns id="ghCardCol">
                    <CardGroup id="ghCardGroup">
                        {/*<Card id="ghCard">*/}
                            <Card.Body id="ghCardBody">
                                <Card.Img src={imageFinder} id="ghCardImg"/>
                                <Card.Title>{plant.plantCommonName}</Card.Title>
                                {/*<Card.Img*/}
                                {/*</>*/}
                        {plants.map(plant => <GreenhousePlant plant={plant} key={plant.plantId}/>)}
                            </Card.Body>
                        {/*</Card>*/}
                    </CardGroup>
</CardColumns>

                        </Col>
                    </Row>
                </Container>
                </div>

            </Jumbotron>



            </>
            )
        }




