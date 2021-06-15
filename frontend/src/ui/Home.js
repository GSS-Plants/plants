import React, {useState} from 'react'
import "./Styles.css"
import "./Navbar"
import vine from "../assets/vine.png";
import succulent from "../assets/nonessential-succulent.png"
import tree from "../assets/tree.png"
import stalk from "../assets/nonessential-stalks.png"
import {
    Row,
    Col,
    Jumbotron,
    Card,
    ListGroup, Container,
} from 'react-bootstrap'
import "./Navbar"

import {SearchBar} from "./SearchBar";

export const Home = () => {


    return (

        <div id="container">


            <Row>
                <Col>
                    <Jumbotron id="jumone" className="jumbotron jumbotron-fluid">

                        <Container>

                                    <div className="typing-demo">
                                        Plant.r
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
            <Row>
                <Col id="cardA">
                    <Card style={{width: '18rem'}} id="cardd">
                        <Card.Img
                            alt="plant photo"
                            src={succulent}
                            width="30"
                            height="400"
                            className="d-inline-block align-top"
                        />
                        <Card.Body>

                            <Card.Title>Kyerstin O'Neal</Card.Title>

                            <Card.Text>
                                <hr/>
                                I am an Air Force brat who’s been living in Albuquerque on and off for about a decade
                                now. A few of my favorite things: sci-fi, MMA, disruptive technologies, travelling, and
                                above all, food. Of the multiple careers I’ve had - personal trainer, journalist, real
                                estate agent - I am most excited about my journey as a woman in tech. Also a two-time
                                bootcamp graduate, I attended Deep Dive Digital Media in 2020 and Fullstack in 2021.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        </ListGroup>
                    </Card>
                </Col>

                <Col id="cardA">
                    <Card style={{width: '18rem'}} id="cardd">
                        <Card.Img variant="top"

                                  alt="plant photo"
                                  src={tree}
                                  width="30"
                                  height="400"
                                  className="d-inline-block align-top"
                        />
                        <Card.Body>
                            <Card.Title>Samuel Martinez</Card.Title>

                            <Card.Text>
                                <hr/>
                                I am an Albuquerque native and two-time boot camp graduate. A few of my favorite things:
                                reading, backpacking, keyboard shortcuts and board games. I got a BA from Whitman
                                College in Walla Walla, Washington, but had to come back for the mountains, the chile
                                and the people. I learned everything I could from work in a Verizon call center before
                                signing up for Deep Dive Java + Android in 2020 and Fullstack in 2021.
                            </Card.Text>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        </ListGroup>
                    </Card>
                </Col>

                <Col id="cardA">
                    <Card style={{width: '18rem'}} id="cardd">
                        <Card.Img variant="top"

                                  alt="plant photo"
                                  src={stalk}
                                  width="30"
                                  height="400"
                                  className="d-inline-block align-top"
                        />
                        <Card.Body>
                            <Card.Title>Simo Bouchentouf</Card.Title>
                            <Card.Text>
                                <hr/>
                                I'm a Moroccan-American Citizen who immigrated to the US in 2011. Lived in Brooklyn NY,
                                Fort Lauderdale FL I then moved to Albuquerque NM early 2017. My favorite things
                                including ; Playing Piano, Music, Rugby, languages, cultures, traveling and
                                technology... I've had difference work experience, operating Forklifts, Construction,
                                Cook, Baker, Warehouse Supervisor...
                                Deep Dive Fullstack Bootcamp 2021 has been a Unique and Challenging experience for me
                                that I'm glad I signed up for and committed to it during the 10 weeks.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        </ListGroup>
                    </Card>
                </Col>

                <Col id="cardA" class="col-md-3 mx-auto mb-5 text-center">
                    <Card style={{width: '18rem'}} id="cardd">
                        <Card.Img variant="top"

                                  alt="plant photo"
                                  src={vine}
                                  width="30"
                                  height="400"
                                  className="d-inline-block align-top"
                        />
                        <Card.Body>

                            <Card.Title>Gabriella Hawkins</Card.Title>
                            <Card.Text>
                                <hr/>
                                California born; Albuquerque raised. I have been interested in Web Development for the
                                last 5 or 6 years. I saw the opportunity to take this bootcamp as a result of the
                                pandemic, and I am overly excited to begin my career. I am highly skilled and passionate
                                about Front-End Development, but I am proud to call myself a Full-Stack Web Developer.
                                Outside of Web Development I enjoy camping adventures with my two German Shepherds,
                                reading comics, playing video games and building PCs.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        </ListGroup>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

