import {Button, Col, Form, Row} from "react-bootstrap";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfilePlantsByProfileId} from "../store/profile-plant";

export const AddReminderFormContent = (props) => {
    const {
        status,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        // dirty,
        // isSubmitting,
        // handleReset,
    } = props;
    const dispatch = useDispatch()

    const initialEffects = () => {
        dispatch(fetchProfilePlantsByProfileId())
    }
    React.useEffect(initialEffects, [])

    const plants = useSelector((state) => state.profilePlants ? state.profilePlants : [])
    return (<>
        <Form id="newReminderContent" onSubmit={handleSubmit} className="justify-content-center">
            <Row><Col className='m-0'><h2>Add A Reminder</h2></Col></Row>
            <Row className="justify-content-center">
                <Col md={3}>
                    <Form.Group controlId="plantPicker">
                        <Form.Label>Plant:</Form.Label>
                        <Form.Control as="select" className='mx-auto mt-0' placeholder="Choose..." value={values.plant} name='reminderProfilePlantId' onChange={handleChange} onBlur={handleBlur}>
                            <option>Choose...</option>
                            {plants.map(plant => (<option key={plant.profilePlantId} value={plant.profilePlantId}>{plant.plantCommonName}</option>))}
                        </Form.Control>
                    </Form.Group>
                    {errors.reminderProfilePlantId && touched.reminderProfilePlantId && (
                        <div className="alert alert-danger">{errors.reminderProfilePlantId}</div>
                    )}
                </Col>
                <Col md={3}>
                    <Form.Group controlId="datePicker">
                        <Form.Label>Start Date:</Form.Label>
                        <Form.Control as="input" className='mx-auto mt-0'  type="date" name="reminderStartDate" value={values.reminderStartDate} onChange={handleChange} onBlur={handleBlur} placeholder="Number of days"/>
                    </Form.Group>
                    {errors.reminderStartDate && touched.reminderStartDate && (
                        <div className="alert alert-danger">{errors.reminderStartDate}</div>
                    )}
                </Col>
                <Col md={3}>
                    <Form.Group controlId="intervalPicker">
                        <Form.Label>Frequency (days):</Form.Label>
                        <Form.Control as="input" className='mx-auto mt-0'  type="number" htmlSize={4} min="1" max="365" name="reminderRecurrence" value={values.reminderRecurrence} onChange={handleChange} onBlur={handleBlur} placeholder="Number of days"/></Form.Group>
                    {errors.reminderRecurrence && touched.reminderRecurrence && (
                        <div className='alert alert-danger'>{errors.reminderRecurrence}</div>
                    )}
                </Col>
            </Row>
            <Row className="justify-content-center"><Col md={6} className='m-0'>
                <Form.Group controlId="reminderNotes">
                    <Form.Label>Notes:</Form.Label>
                    <Form.Control as="input" className='mx-auto mt-0'  type="text-area" name="reminderDescription" value={values.reminderDescription} onChange={handleChange} onBlur={handleBlur}
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