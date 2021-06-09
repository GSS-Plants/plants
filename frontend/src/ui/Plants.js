import React from 'react'
import {Row, Col, Button, Form, Navbar, Image, Container, Nav, InputGroup,} from 'react-bootstrap'
import "./Styles.css"
import logo from "../assets/logo-filler.png";

export const Plants= () => {
    return (
        <div id="container">

            <Row>
                <Col id="Pcol" lg={{span:10,offset:1}}>
                    <h1>More Info</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis cumque ducimus ea eligendi exercitationem ipsam molestias quod sequi. Ab architecto asperiores at autem consequuntur dolorum earum eos eum eveniet expedita fugit impedit labore laborum libero maiores maxime necessitatibus neque numquam pariatur praesentium provident quibusdam, quisquam quod repellat totam unde veritatis voluptate! Adipisci commodi cum, delectus, deserunt dicta distinctio dolorem eligendi error esse excepturi exercitationem in, non provident quae quisquam repudiandae velit voluptate voluptatum. Beatae, dicta et eum exercitationem illo illum laborum, maiores molestias natus nihil nostrum qui rem repellat repellendus repudiandae sequi voluptatum? Cumque dolores, eaque ex excepturi laudantium nulla sint ullam veritatis voluptas voluptates. Aspernatur beatae consequatur cumque ducimus, est et eum excepturi fuga incidunt itaque laboriosam libero magnam non numquam officiis saepe sequi sit tempora voluptate voluptatum. Aspernatur, deserunt, reprehenderit? Accusantium amet at commodi consequuntur corporis delectus enim eum incidunt iusto mollitia, nam non nostrum nulla optio pariatur sequi soluta veniam. Consequatur delectus doloremque dolores eum impedit inventore necessitatibus nisi, quibusdam sed sequi. Ab adipisci, aliquam cum doloremque eaque eius eligendi est facere in incidunt ipsam laborum laudantium nihil nisi nostrum officia sapiente temporibus ullam vel voluptate. Amet earum, exercitationem iure maxime modi nemo quia sed voluptatum.</p>
                </Col>
            </Row>
            <Row>
                <Col id="buttcall">
                    <Button id="Butt" class="btn btn-success">Link</Button>
                    <Button id="Butt2" class="btn btn-success">Add to Greenhouse</Button>
                  <hr/>
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
