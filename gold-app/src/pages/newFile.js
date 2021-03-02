import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../css/style.css';

class newFile extends Component {

    render() {
        return(
            <main>
               <section >
                    <h1>
                        Files:
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
                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="AM" />
                            <Form.Check type="checkbox" label="PM" />
                        </Form.Group>
                        <Form.Group controlId="Temp">
                            <Form.Label>Temp: </Form.Label>
                            <Form.Control placeholder="Enter Temp" />
                        </Form.Group>
                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="F" />
                            <Form.Check type="checkbox" label="C" />
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
                    </Form>
                    <Button variant="outline-success">Add New File</Button>{' '}
                </section>
            </main>
        )
    }
}

export default newFile
