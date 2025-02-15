import './NavBar.css';

import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';

import Dropdown from 'react-bootstrap/Dropdown';

// import { hover } from '@testing-library/user-event/dist/hover';
// import { whenTransitionDone } from 'fullcalendar';

const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div style={{
            display: 'inline', width: '100%', display: 'block', position: 'fixed', zIndex: 9
        }}>
            <Navbar style={{backgroundColor:'#D6D5C9'}} light expand="md">
            <a href="/"><img src={require("./images/BOOKME.png")} className="logo" ></img></a>
                <NavbarBrand href="/" style={{color: 'red', fontSize: '2.2em', borderRadius: '5px', fontFamily: 'Hind Madurai, sans-serif'}}>Events</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <NavbarBrand href="/venues" style={{color: 'red', fontSize: '2.2em', borderRadius: '5px', fontFamily: 'Hind Madurai, sans-serif'}}>Venue</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <NavbarBrand href="/calendar" style={{color: 'red', fontSize: '2.2em', borderRadius: '5px', fontFamily: 'Hind Madurai, sans-serif'}}>Events Calendar</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                {/* <NavbarBrand href="/events">Events</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} /> */}
                
                <Dropdown>
                  <Dropdown.Toggle variant="success">
                    Select price range
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  <Dropdown.Item href="/">
                    All Events
                    </Dropdown.Item>
                    <Dropdown.Item href="/free">
                      Free events
                    </Dropdown.Item>
                    <Dropdown.Item href="/midRange">
                    £0-£10
                    </Dropdown.Item>
                    <Dropdown.Item href="/expensive">
                    Above £10
                    </Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            </Navbar>
        </div>
    );
}
export default NavBar;