import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import '../css/style.css';

class Files extends Component {

    render() {
        return(
            <main>
               <section className="App-header">
                    <h1>
                        Files:
                    </h1>
                    <Button variant="outline-success">Add New File</Button>{''}
                </section>
            </main>
        )
    }
}

export default Files
