import React from "react"
import "./greenhouse.css"
import bgimage from "../assets/shelves.png"
import standingPlant from "../assets/standingPlant.png"
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'


import {Button, Card, CardColumns, CardGroup, Col, Container, Image, Jumbotron, Row} from "react-bootstrap";


import "./greenhouse-js.js"


import {GreenhousePlant} from "./GreenhousePlant";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfilePlantsByProfileId} from "../store/profile-plant";
import plant from "../store/plant";
import {CompostModal} from "./CompostModal";
import {useHistory} from "react-router-dom";


export const Greenhouse = () => {

    const history = useHistory()

    const dispatch = useDispatch()

    const plants = useSelector((state) => state.profilePlants ? state.profilePlants : [])


    const initialEffects = () => {
        dispatch(fetchProfilePlantsByProfileId())
    }
    React.useEffect(initialEffects, [])



    function imageFinder(growth) {

    }

    return (
        <>

            {/*<h1 className="display-4" id="ghTitle"><b>GREENHOUSE</b></h1>*/}
            <Jumbotron id="greenJumbo" className="jumbotron jumbotron-fluid"
                       style={{backgroundImage: `url(${bgimage})`, backgroundSize: 'cover'}}>

                <div className="container">
                    <Container id="ghContainer">

                        <Row>
                            {/*<Col md>*/}
                            {/*    <CardColumns id="ghCardCol">*/}
                            {/*        <CardGroup id="ghCardGroup">*/}
                            {/*            /!*<Card id="ghCard">*!/*/}
                            {/*            <Card.Body id="ghCardBody">*/}
                                            {/*<Card.Img src={imageFinder} id="ghCardImg"/>*/}
                                            {/*<Card.Title>{plant.plantCommonName}</Card.Title>*/}
                                            {/*<Card.Img*/}
                                            {/*</>*/}
                                            {plants.map(plant => <GreenhousePlant plant={plant} key={plant.plantId}/>)}
                            {/*            </Card.Body>*/}
                            {/*            /!*</Card>*!/*/}
                            {/*        </CardGroup>*/}
                            {/*    </CardColumns>*/}
                                {/*STANDING PLANT*/}
                                <Image  src={standingPlant} id="ghStandingPlant"/>
                            {/*</Col>*/}
                        </Row>
                    </Container>
                </div>


            </Jumbotron>

<Container>
            <Row>
                <Col sm>
                    <div>
                        <CompostModal plants={plants}/>
                    </div>
                </Col>

                <Col>
                    <div>
                        <Button className="btn btn-lg" id="ghBtn-editReminders" onClick={() => {history.push('/reminder')}}>edit reminders</Button>
                    </div>
                </Col>
            </Row>
</Container>

        </>
    )
}




