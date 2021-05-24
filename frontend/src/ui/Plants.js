import React from 'react'
import {Row, Col, Button, Form, Navbar, Image, Container, Nav, InputGroup,} from 'react-bootstrap'
import "./Styles.css"
import logo from "../assets/logo-filler.png";

export const Plants= () => {
    return (
        <div id="container">
            <Navbar bg="light" variant="light" expand="xl">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    plant.r
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-links"/>
                <Navbar.Collapse id="navbar-links" className="justify-content-between">
                    <Nav className="justify-content-between">
                        <Nav.Link href="/reminder">Reminder</Nav.Link>
                        <Nav.Link href="#search">Search</Nav.Link>
                        <Nav.Link href="#plant">Plant</Nav.Link>
                        <Nav.Link href="#greenhouse">Greenhouse</Nav.Link>
                        <Nav.Link href="#contact">Contact Team Plants</Nav.Link>
                        <Nav.Link href="#loginModal" className="text-success">Sign up / Sign in</Nav.Link>
                    </Nav>
                    <Form inline as={InputGroup} className="w-50">
                        <Form.Control type="text" placeholder="Search for plants"/>
                        <InputGroup.Append><Button variant="outline-success">Go</Button></InputGroup.Append>
                    </Form>
                </Navbar.Collapse>

            </Navbar>
            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                                <Image src="https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZsb3dlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" rounded />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col id="Pcol" lg={{span:10,offset:1}}>
                    <h1>More Info</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis cumque ducimus ea eligendi exercitationem ipsam molestias quod sequi. Ab architecto asperiores at autem consequuntur dolorum earum eos eum eveniet expedita fugit impedit labore laborum libero maiores maxime necessitatibus neque numquam pariatur praesentium provident quibusdam, quisquam quod repellat totam unde veritatis voluptate! Adipisci commodi cum, delectus, deserunt dicta distinctio dolorem eligendi error esse excepturi exercitationem in, non provident quae quisquam repudiandae velit voluptate voluptatum. Beatae, dicta et eum exercitationem illo illum laborum, maiores molestias natus nihil nostrum qui rem repellat repellendus repudiandae sequi voluptatum? Cumque dolores, eaque ex excepturi laudantium nulla sint ullam veritatis voluptas voluptates. Aspernatur beatae consequatur cumque ducimus, est et eum excepturi fuga incidunt itaque laboriosam libero magnam non numquam officiis saepe sequi sit tempora voluptate voluptatum. Aspernatur, deserunt, reprehenderit? Accusantium amet at commodi consequuntur corporis delectus enim eum incidunt iusto mollitia, nam non nostrum nulla optio pariatur sequi soluta veniam. Consequatur delectus doloremque dolores eum impedit inventore necessitatibus nisi, quibusdam sed sequi. Ab adipisci, aliquam cum doloremque eaque eius eligendi est facere in incidunt ipsam laborum laudantium nihil nisi nostrum officia sapiente temporibus ullam vel voluptate. Amet earum, exercitationem iure maxime modi nemo quia sed voluptatum.</p>
                </Col>
            </Row>
            <Row>
                <Col id="buttcall">
                    <Button id="Butt">Link</Button>
                    <Button id="Butt2">Add to Greenhouse</Button>
                  <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                                <Image src="https://images.unsplash.com/photo-1482772933081-0f28cb6bf426?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" rounded />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col id="Pcol" lg={{span:10,offset:1}}>
                    <h1>More Info</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis cumque ducimus ea eligendi exercitationem ipsam molestias quod sequi. Ab architecto asperiores at autem consequuntur dolorum earum eos eum eveniet expedita fugit impedit labore laborum libero maiores maxime necessitatibus neque numquam pariatur praesentium provident quibusdam, quisquam quod repellat totam unde veritatis voluptate! Adipisci commodi cum, delectus, deserunt dicta distinctio dolorem eligendi error esse excepturi exercitationem in, non provident quae quisquam repudiandae velit voluptate voluptatum. Beatae, dicta et eum exercitationem illo illum laborum, maiores molestias natus nihil nostrum qui rem repellat repellendus repudiandae sequi voluptatum? Cumque dolores, eaque ex excepturi laudantium nulla sint ullam veritatis voluptas voluptates. Aspernatur beatae consequatur cumque ducimus, est et eum excepturi fuga incidunt itaque laboriosam libero magnam non numquam officiis saepe sequi sit tempora voluptate voluptatum. Aspernatur, deserunt, reprehenderit? Accusantium amet at commodi consequuntur corporis delectus enim eum incidunt iusto mollitia, nam non nostrum nulla optio pariatur sequi soluta veniam. Consequatur delectus doloremque dolores eum impedit inventore necessitatibus nisi, quibusdam sed sequi. Ab adipisci, aliquam cum doloremque eaque eius eligendi est facere in incidunt ipsam laborum laudantium nihil nisi nostrum officia sapiente temporibus ullam vel voluptate. Amet earum, exercitationem iure maxime modi nemo quia sed voluptatum.</p>
                </Col>
            </Row>
            <Row>
                <Col id="buttcall">
                    <Button id="Butt">Link</Button>
                    <Button id="Butt2">Add to Greenhouse</Button>
                    <hr/>
                </Col>
            </Row>
        </div>
    )
}
