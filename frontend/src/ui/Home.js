import React, {useState} from 'react'
import "./Styles.css"
import "./Navbar"
import Gabi from "../assets/plant.r-gabi.png";
import Kyer from "../assets/plant.r-kyerstin.png"
import  Sam from "../assets/plant.r-samuel.png"
import Simo from "../assets/plant.r-simo.png"
import git from "../assets/github-icon.png"
import linkIn from "../assets/linkedin-icon.png"
import {
    Row,
    Col,
    Jumbotron,
    Card,
    ListGroup, Container, Image,
} from 'react-bootstrap'
import "./Navbar"



export const Home = () => {


    return (

        <Container fluid id="container">


            <Row>
                <Col>
                    <Jumbotron id="jumone" className="jumbotron jumbotron-fluid">

                        <Container>

                            <div className="wrapper">
                                <div className="typing-demo">
                                    Plant.r
                                </div>
                            </div>

                        </Container>

                    </Jumbotron>
                </Col>
            </Row>
            <div id="LGS">
                <h1>Lets Get Started!</h1>
                <p>Welcome to Plant.r where you can search any plant you like to learn more on how not to kill them, you
                    can also create a plant profile and add your plant of choice to keep track of when to water.<br/>
                    So go on! find your new friend, and create a reminder so they can live forever!</p>
            </div>
            <Row id='cardA'>
                <Col>
                    <Card style={{width: '100%'}} id="cardd">
                        <Card.Img
                            alt="Kyerstin's photo"
                            src={Kyer}
                            width="100%"
                            height="auto"
                            className="d-inline-block align-top"
                        />
                        <Card.Body>

                            <Card.Title>Kyerstin O'Neal</Card.Title>

                            <hr/>
                            <Card.Text>
                                I am an Air Force brat who’s been living in Albuquerque on and off for about a decade
                                now. A few of my favorite things: sci-fi, MMA, disruptive technologies, travelling, and
                                above all, food. Of the multiple careers I’ve had - personal trainer, journalist, real
                                estate agent - I am most excited about my journey as a woman in tech. Also a two-time
                                bootcamp graduate, I attended Deep Dive Digital Media in 2020 and Fullstack in 2021.
                            </Card.Text>
                            <Card.Footer className="text-muted">
                                <a href="https://github.com/adykor"> <Image src={git} className="footerIcons"/> </a>
                                <a href="https://www.linkedin.com/in/adykor/"> <Image src={linkIn} className="footerIcons"/> </a>
                            </Card.Footer>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        </ListGroup>
                    </Card>
                </Col>

                <Col>
                    <Card style={{width: '100%'}} id="cardd">
                        <Card.Img variant="top"

                                  alt="Samuel's photo"
                                  src={Sam}
                                  width="100%"
                                  height="auto"
                                  className="d-inline-block align-top"
                        />
                        <Card.Body>
                            <Card.Title>Samuel Martinez</Card.Title>
                            <hr/>
                            <Card.Text>
                                I am an Albuquerque native and two-time boot camp graduate. A few of my favorite things:
                                reading, backpacking, keyboard shortcuts and board games. I got a BA from Whitman
                                College in Walla Walla, Washington, but had to come back for the mountains, the chile
                                and the people. I learned everything I could from work in a Verizon call center before
                                signing up for Deep Dive Java + Android in 2020 and Fullstack in 2021.
                            </Card.Text>
                            <Card.Footer className="text-muted">
                                <a href="https://github.com/semartinez147"> <Image src={git} className="footerIcons"/> </a>
                                <a href="https://www.linkedin.com/in/semartinez147/"> <Image src={linkIn} className="footerIcons"/> </a>
                            </Card.Footer>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        </ListGroup>
                    </Card>
                </Col>

                <Col>
                    <Card style={{width: '100%'}} id="cardd">
                        <Card.Img variant="top"
                                  alt="Simo's photo"
                                  src={Simo}
                                  width="100%"
                                  height="auto"
                                  className="d-inline-block align-top"
                        />
                        <Card.Body>
                            <Card.Title>Simo Bouchentouf</Card.Title>
                            <hr/>
                            <Card.Text>
                                I'm a Moroccan-American Citizen who immigrated to the US in 2011. Lived in Brooklyn NY,
                                Fort Lauderdale FL I then moved to Albuquerque NM early 2017. My favorite things
                                including ; Playing Piano, Music, Rugby, languages, cultures, traveling and
                                technology... I've had difference work experience, operating Forklifts, Construction,
                                Cook, Baker, Warehouse Supervisor...
                                Deep Dive Fullstack Bootcamp 2021 has been a Unique and Challenging experience for me
                                that I'm glad I signed up for and committed to it during the 10 weeks.
                            </Card.Text>
                            <Card.Footer className="text-muted">
                                   <a href="https://github.com/mbouchentouf"> <Image src={git} className="footerIcons"/> </a>
                                <a href="#"> <Image src={linkIn} className="footerIcons"/> </a>
                            </Card.Footer>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        </ListGroup>
                    </Card>
                </Col>

                <Col className="col-md-3 mx-auto mb-5 text-center">
                    <Card style={{width: '100%'}} id="cardd">
                        <Card.Img variant="top"
                                  alt="Gabi's photo"
                                  src={Gabi}
                                  width="100%"
                                  height="auto"
                                  className="d-inline-block align-top"
                        />
                        <Card.Body>

                            <Card.Title>Gabriella Hawkins</Card.Title>
                            <hr/>
                            <Card.Text>
                                California born; Albuquerque raised. I have been interested in Web Development for the
                                last 5 or 6 years. I saw the opportunity to take this bootcamp as a result of the
                                pandemic, and I am overly excited to begin my career. I am highly skilled and passionate
                                about Front-End Development, but I am proud to call myself a Full-Stack Web Developer.
                                Outside of Web Development I enjoy camping adventures with my two German Shepherds,
                                reading comics, playing video games and building PCs.
                            </Card.Text>
                            <Card.Footer className="text-muted">
                                <a href="https://github.com/GabiHawk90"> <Image src={git} className="footerIcons"/> </a>
                                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"> <Image src={linkIn} className="footerIcons"/> </a>
                            </Card.Footer>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        </ListGroup>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

