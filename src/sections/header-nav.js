import '../css/App.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default class Header extends Component {

    render() {
        return (
            <>
                <Navbar.Brand id="home">
                    <p className="scriptbrandfont">vintage by vo</p>
                </Navbar.Brand>

                <Navbar expand="lg" sticky="top">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={Link} to="/#">Home</Nav.Link>
                            <Nav.Link as={Link} to="/#/collection">Collection</Nav.Link>
                            <Nav.Link as={Link} to="/#/designers">Shop Designer</Nav.Link>
                            <NavDropdown title="About Us" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/#/about">About Us</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/#/care">Item Care</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/#/shipping">Shipping</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="https://www.instagram.com/uniandkoa/" target="_blank" rel="noreferrer">My Bunnies</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/#/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/#/testing">Test Page</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </>
        );
    }
}
// eslint-disable-next-line
/*

NAVBAR + SCROLLER FUNCTIONALITY:

import { scroller } from 'react-scroll';

<Nav.Link onClick={() => scroller.scrollTo('home', {
    smooth: true,
    offset: -70,
    duration: 500,
})}>Home</Nav.Link>


*/