import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../css/style.css';

class newFile extends Component {

    render() {
        return(
            <main>
               <section >
                    <h1>
                        Input Form:
                    </h1>
                    <Form>
                        <Form.Group controlId="JobNumber">
                            <Form.Label>Job Number: </Form.Label>
                            <Form.Control placeholder="Enter Job #" />
                        </Form.Group>
                        <Form.Group controlId="DateofInspection">
                            <Form.Label>Date of Inspection: </Form.Label>
                            <Form.Control placeholder="Enter Date" />
                        </Form.Group>
                        <Form.Group controlId="Location">
                            <Form.Label>Location: </Form.Label>
                            <Form.Control placeholder="Enter Location" />
                        </Form.Group>
                        <Form.Group controlId="Time">
                            <Form.Label>Time: </Form.Label>
                            <Form.Control placeholder="Enter Time" />
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col sm={10}>
                                <Form.Check
                                type="radio"
                                label="AM"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                />
                                <Form.Check
                                type="radio"
                                label="PM"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="Temp">
                            <Form.Label>Temp: </Form.Label>
                            <Form.Control placeholder="Enter Temp" />
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col sm={10}>
                                <Form.Check
                                type="radio"
                                label="F"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                />
                                <Form.Check
                                type="radio"
                                label="C"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="Contractor">
                            <Form.Label>Contractor: </Form.Label>
                            <Form.Control placeholder="Enter Contractor" />
                        </Form.Group>
                        <Form.Group controlId="Subcontractor">
                            <Form.Label>Subcontractor: </Form.Label>
                            <Form.Control placeholder="Enter Subcontractor" />
                        </Form.Group>
                        <Form.Group controlId="SiteConditions">
                            <Form.Label>Site Conditions: </Form.Label>
                            <Form.Control placeholder="Enter Site Conditions" />
                        </Form.Group>
                        <Form.Group controlId="Others">
                            <Form.Label>Others Present at Site: </Form.Label>
                            <Form.Control placeholder="Enter Others" />
                        </Form.Group>
                        <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Copies to: 
                        </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                type="radio"
                                label="Called"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                />
                                <Form.Check
                                type="radio"
                                label="Checked In"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                />
                                <Form.Check
                                type="radio"
                                label="E-mail"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="Name">
                            <Form.Label>Name: </Form.Label>
                            <Form.Control placeholder="Enter Name" />
                        </Form.Group>
                    </Form>
                    <Button variant="outline-success">Add New File</Button>{' '}
                </section>
            </main>
        )
    }
}

export default newFile
