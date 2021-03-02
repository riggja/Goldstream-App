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
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Date of Inspection: </Form.Label>
                            <Form.Control placeholder="Enter Date" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Job Number: </Form.Label>
                            <Form.Control placeholder="Enter Job #" />
                        </Form.Group>
                    </Form>
                    <Button variant="outline-success">Add New File</Button>{' '}
                </section>
            </main>
        )
    }
}

export default newFile
