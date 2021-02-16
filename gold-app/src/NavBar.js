import React, { Component } from 'react';
import './style.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { PageLinks} from "./PageLinks";


class NavBar extends Component {

    render() {
        return(
        <nav>
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
                {PageLinks.map((item, index) => {
                    return (
                        <li key={index} className="nav-item">
                            <Link className="nav-link" to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
              </ul>
            </div>
         </nav>
        )
    }
}

export default NavBar
