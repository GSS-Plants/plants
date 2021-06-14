import React, {useState} from "react"
import {Button, Col, Container, Form, InputGroup, Modal, Nav, Navbar, Row, Table} from "react-bootstrap";
import "./Styles.css"
import {useDispatch, useSelector} from "react-redux";
import {fetchProfilePlantsByProfileId} from "../store/profile-plant";
import {fetchRemindersByProfileId} from "../store/reminders";
import {AddReminderForm} from "./AddReminderForm";


export const Reminder = () => {
    const dispatch = useDispatch()

    const initialEffects = () => {
        dispatch(fetchRemindersByProfileId())
    }
    React.useEffect(initialEffects, [dispatch])

    const reminders = useSelector((state) => state.reminders ? state.reminders : [])
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


                    <AddReminderForm/>
                </Container>
            </div>
        </>
    )
}