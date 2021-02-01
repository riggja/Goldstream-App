import React, { Component } from 'react';
import './style.css';

class NavBar extends Component {

    render() {
        return(
        <nav>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></link>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"></link>
            <link rel="stylesheet" href="css/style.css"></link>
            <div id="smallmenu" className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   Menu
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="index.html">Home</a>
                    <a className="dropdown-item" href="subPage.html">Files</a>
                    <a className="dropdown-item" href="subPage.html">Settings</a>
                </div>
            </div>
            <div>
              <ul id="menu">
                <li>
                    <img src="src/GSELogo.png" alt="Goldstream Engineering Logo"/>
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
