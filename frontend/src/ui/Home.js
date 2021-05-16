import React from "react"
import {Col, Container, Row} from "react-bootstrap";
export const Home = () => {

    return (
        <Container fluid id="TheCont">
            <Row>
                <Col  lg={{span:8, offset:2}}>
                    <img src="https://images.unsplash.com/photo-1485841890310-6a055c88698a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="plantphoto" id="photoplants"/>
                </Col>
            </Row>
            
        </Container>)}