import React, {useState} from "react"
import {Button, Col, Container, Form, InputGroup, Modal, Nav, Navbar, Row, Table} from "react-bootstrap";
import "./Styles.css"
import {useDispatch, useSelector} from "react-redux";
import {fetchProfilePlantsByProfileId} from "../store/profile-plant";
import {fetchRemindersByProfileId} from "../store/reminders";


export const Reminder = () => {
    const dispatch = useDispatch()

    const initialEffects = () => {
        dispatch(fetchRemindersByProfileId())
    }
    React.useEffect(initialEffects, [dispatch])

    const reminders = useSelector((state) => state.reminders ? state.reminders : [])
    let plantNames = []
    return (
        <>

            <div id="container">


                <Container id="remindersBorder" className="text-center mt-4">
                    <Row>
                        <Col>
                            <h1 className="my-3">Reminders</h1>

                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={8} xl={6}><Table striped bordered hover size="sm">
                            <thead>
                            <tr>
                                <th>Plant Name</th>
                                <th>Start Date</th>
                                <th>Frequency</th>
                                <th>Notes</th>
                            </tr>
                            </thead>
                            <tbody>
                            {reminders.map(reminder => {
                                plantNames.push(reminder.plantCommonName)
                                console.log(plantNames)
                                return (
                                    <tr>
                                        <td>{reminder.plantCommonName}</td>
                                        <td>{reminder.reminderStartDate}</td>
                                        <td>{reminder.reminderRecurrence} days</td>
                                        <td>{reminder.reminderDescription}</td>
                                    </tr>)
                            })}
                            </tbody>
                        </Table></Col>
                    </Row>


                    <Form>
                        <Row><Col><h2>Add A Reminder</h2></Col></Row>
                        <Row className="justify-content-center">
                            <Col md={3} className="my-2">
                                <Form.Group controlId="plantPicker">
                                    <Form.Label>Which plant?</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose...">
                                        <option>Choose...</option>
                                        {plantNames.map(plantName => (<option>{plantName}</option>))}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={3} className="my-2">
                                <Form.Group controlId="datePicker">
                                    <Form.Label>When to start reminders:</Form.Label>
                                    <Form.Control type="date" placeholder="Number of days"/>
                                </Form.Group>
                            </Col>
                            <Col md={3} className="my-2">
                                <Form.Group controlId="intervalPicker">
                                    <Form.Label>Days between reminders:</Form.Label>
                                    <Form.Control type="number" htmlSize={4} min="1" max="365" placeholder="Number of days"/></Form.Group>
                            </Col>
                        </Row>
                        <Row><Col>
                            <Form.Group controlId="reminderNotes">
                                <Form.Label>Reminder Notes:</Form.Label>
                                <Form.Control type="text-area" placeholder="Anything you need to remember about your watering method"/>
                            </Form.Group>
<<<<<<< HEAD
                        </Col>
                        <Col md={3} className="my-2">
                            <Form.Group controlId="intervalPicker">
                                <Form.Label>Days between reminders:</Form.Label>
                                <Form.Control type="number" htmlSize={4} min="1" max="365" placeholder="Number of days"/></Form.Group>
                        </Col>
                    </Row>
                    <Row  className="justify-content-center">
                        <Col md={6}>
                            <Button id="reminderB" variant="primary" size="lg" block>
                                Save reminder </Button>

                        </Col>
                    </Row>
=======
                        </Col></Row>
                        <Row className="justify-content-center">
                            <Col md={6}>
                                <Button id="reminderB" variant="primary" size="lg" block>
                                    Save reminder </Button>
                            </Col>
                        </Row>
>>>>>>> b9d2d332b5970eb88c124b6e09a41c3d9d6aa237
                    </Form>
                </Container>
            </div>
        </>
    )
}