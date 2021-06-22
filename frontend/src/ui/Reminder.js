import React from "react"
import {Col, Container, Form, InputGroup, Modal, Nav, Navbar, Row, Table} from "react-bootstrap";
import "./Styles.css"
import {Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {fetchRemindersByProfileId} from "../store/reminders";
import {AddReminderForm} from "./AddReminderForm";
import {ReminderDeleter} from "./ReminderDeleter";
import {httpConfig} from "../utils/httpConfig";

//TODO: Load something else if not logged in
export const Reminder = () => {
    const dispatch = useDispatch()

    const initialEffects = () => {
        dispatch(fetchRemindersByProfileId())
    }


    const deleteReminder = (values, {resetForm, setStatus}) => {
        const deleteId = values.deleteId
        httpConfig.delete(`/apis/reminder/${deleteId}`)
            .then(reply => {
                let {message, type} = reply;
                setStatus({message, type})
                if (reply.status === 200) {
                    resetForm()
                    dispatch(fetchRemindersByProfileId())
                }
            })
    }

    React.useEffect(initialEffects, [dispatch])

    const reminders = useSelector((state) => state.reminders ? state.reminders : [])
    return (
        <>

            <div id="container">


                <Container id="remindersBorder" className="text-center mt-4">
                    <Row>
                        <Col className='m-0'>
                            <h1>Reminders</h1>

                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={8}><Table striped bordered hover size="sm">
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
                                const deleteButton = {
                                    deleteId: reminder.reminderId
                                };
                                return (
                                    <tr className='align-text-center' key={reminder.reminderId}>
                                        <td>{reminder.plantCommonName}</td>
                                        <td>{reminder.reminderStartDate}</td>
                                        <td>{reminder.reminderRecurrence} days</td>
                                        <td>{reminder.reminderDescription}</td>
                                        <td><Formik
                                            initialValues={deleteButton}
                                            onSubmit={deleteReminder}
                                        >
                                            {ReminderDeleter}
                                        </Formik></td>
                                    </tr>

                                )
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