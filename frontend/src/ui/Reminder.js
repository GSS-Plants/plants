import React from "react"
import {Button, Col, Container, Form, Row, Table} from "react-bootstrap";
import {PlantrNav} from "./PlantrNav";

export const Reminder = () => {
    return (
        <>
            <Container className="text-center">
                <Row>
                    <Col>
                        <h1 className="my-3">Reminders</h1>

                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={8} xl={6}><Table striped bordered hover size="sm">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Plant Name</th>
                            <th>Start Date</th>
                            <th>Frequency</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>12/31/2018</td>
                            <td>7 days</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>1/1/1970</td>
                            <td>28 days</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Ronald</td>
                            <td>4/12/2021</td>
                            <td>3 days</td>
                        </tr>
                        </tbody>
                    </Table></Col>
                </Row>
            </Container>
            <Container className="text-center mt-4">
                <Form>
                    <Row><Col><h2>Add A Reminder</h2></Col></Row>
                    <Row className="justify-content-center">
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
                    <Row  className="justify-content-center">
                        <Col md={6}>
                            <Button variant="primary" size="lg" block>
                                Save reminder </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
}