import {Button, Col, Form, Row} from "react-bootstrap";
import {FormDebugger} from "./sign-in-up/FormDebugger";
import React from "react";
import {useDispatch, useSelector} from "react-redux";

export const AddReminderFormContent = (props) => {
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
    } = props;
    const reminders = useSelector((state) => state.reminders ? state.reminders : [])
    const plants = []
    reminders.map(reminder => {
        const plant = {
            id: reminder.reminderProfilePlantId,
            name: reminder.plantCommonName,
            key: reminder.index
        }
        plants.push(plant)
    })
    return (<>
        <Form id="newReminderContent" onSubmit={handleSubmit} className="justify-content-center">
            <Row><Col><h2>Add A Reminder</h2></Col></Row>
            <Row className="justify-content-center">
                <Col md={3} className="my-2">
                    <Form.Group controlId="plantPicker">
                        <Form.Label>Which plant?</Form.Label>
                        <Form.Control as="select" placeholder="Choose..." value={values.plant} name='reminderProfilePlantId' onChange={handleChange} onBlur={handleBlur}>
                            <option>Choose...</option>
                            {plants.map(plant => (<option key={plant.key} value={plant.id}>{plant.name}</option>))}
                        </Form.Control>
                    </Form.Group>
                    {errors.reminderProfilePlantId && touched.reminderProfilePlantId && (
                        <div className="alert alert-danger">{errors.reminderProfilePlantId}</div>
                    )}
                </Col>
                <Col md={3} className="my-2">
                    <Form.Group controlId="datePicker">
                        <Form.Label>When to start reminders:</Form.Label>
                        <Form.Control as="input" type="date" name="reminderStartDate" value={values.reminderStartDate} onChange={handleChange} onBlur={handleBlur} placeholder="Number of days"/>
                    </Form.Group>
                    {errors.reminderStartDate && touched.reminderStartDate && (
                        <div className="alert alert-danger">{errors.reminderStartDate}</div>
                    )}
                </Col>
                <Col md={3} className="my-2">
                    <Form.Group controlId="intervalPicker">
                        <Form.Label>Days between reminders:</Form.Label>
                        <Form.Control as="input" type="number" htmlSize={4} min="1" max="365" name="reminderRecurrence" value={values.reminderRecurrence} onChange={handleChange} onBlur={handleBlur} placeholder="Number of days"/></Form.Group>
                    {errors.reminderRecurrence && touched.reminderRecurrence && (
                        <div className='alert alert-danger'>{errors.reminderRecurrence}</div>
                    )}
                </Col>
            </Row>
            <Row className="justify-content-center"><Col md={6}>
                <Form.Group controlId="reminderNotes">
                    <Form.Label>Reminder Notes:</Form.Label>
                    <Form.Control as="input" type="text-area" name="reminderDescription" value={values.reminderDescription} onChange={handleChange} onBlur={handleBlur}
                    placeholder="Anything you need to remember about your watering method"/>
                </Form.Group>
            </Col></Row>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Button id="reminderB" variant="primary" size="lg" type="submit" block>
                        Save reminder </Button>
                </Col>
            </Row>
            {/*<FormDebugger {...props} />*/}
        </Form>
        {
            status && (<div className={status.type}>{status.message}</div>)
        }
    </>)
}