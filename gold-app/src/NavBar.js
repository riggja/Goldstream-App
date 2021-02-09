import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import './style.css';

class NavBar extends Component {

    render() {
        return(
        <nav>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"></link>
            <link rel="stylesheet" href="css/style.css"></link>
            <DropdownButton id="smallmenu" title="Menu">
                <Dropdown.Item href="/Homepage">Homepage</Dropdown.Item>
                <Dropdown.Item href="/Files">Files</Dropdown.Item>
                <Dropdown.Item href="/Settings">Settings</Dropdown.Item>
            </DropdownButton>
            <div>
              <ul id="menu">
                <li>
                    <img src="src/Mammoth.jpg" alt="Goldstream Engineering Logo"></img>
                </li>
                <li>
                    <a href="index.html">Homepage</a>
                </li>
                <li>
                    <a href="subPage.html">Files</a>
                </li>
                <li>
                    <a href="subPage.html">Settings</a>
                </li>
              </ul>
            </div>
         </nav>
        )
    }
}

export default NavBar
