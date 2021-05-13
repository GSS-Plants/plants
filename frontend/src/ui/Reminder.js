import React from "react"
import {Col, Container, Form, Image, Navbar, Row, Spinner} from "react-bootstrap";
import DayPickerInput from "react-day-picker/DayPickerInput";
import 'react-day-picker/lib/style.css';
import logo from "../assets/logo-filler.png"

export const Reminder = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Replace me with the real Navbar
                </Navbar.Brand>
            </Navbar>
            <Container className="text-center">
                <Row>
                    <Col>
                        <h1 className="my-3">Schedule A Reminder</h1>
                        <Image src={logo} className="my-4 p-4 border border-dark"/>
                    </Col>
                </Row>
            </Container>
            <Container className="text-center">
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="datePicker">
                                <Form.Label>When to start reminders:</Form.Label>
                                {/*DayPicker docs at http://react-day-picker.js.org/examples/input*/}
                                {/*<DayPickerInput as={Form.Control} type="date"  onDayChange={day => console.log(day)}/>*/}
                                <Form.Control as={DayPickerInput} type="date" onDayChange={day => console.log(day)}/>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="intervalPicker">
                                <Form.Label>How often to be reminded:</Form.Label>
                                <Form.Control type="number" placeholder="Number of days"/></Form.Group>
                        </Col></Row>
                </Form>
            </Container>
        </>
    )
}