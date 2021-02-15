import React, { Component } from 'react';
import './style.css';
import Homepage from "./Homepage.js";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Image from 'react-bootstrap/Image'


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
                    <Image width={180} height={60} src="/GSELogo.png" alt="Goldstream Engineering Logo"/>
                </li>
                <li>
                    <a href="/Homepage">Homepage</a>
                </li>
                <li>
                    <a href="/Files">Files</a>
                </li>
                <li>
                    <a href="/Settings">Settings</a>
                </li>
              </ul>
            </div>
         </nav>
        )
    }
}

export default NavBar
