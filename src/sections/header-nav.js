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
                            <Nav.Link as={Link} to="/vintage-by-vo/#">Home</Nav.Link>
                            <Nav.Link as={Link} to="/vintage-by-vo/#/collection">Collection</Nav.Link>
                            <Nav.Link as={Link} to="/vintage-by-vo/#/designers">Shop Designer</Nav.Link>
                            <NavDropdown title="About Us" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/vintage-by-vo/#/about">About Us</NavDropdown.Item>
                                <NavDropdown.Item href="/vintage-by-vo/#/care">Item Care</NavDropdown.Item>
                                <NavDropdown.Item href="/vintage-by-vo/#/shipping">Shipping</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="https://www.instagram.com/uniandkoa/" target="_blank" rel="noreferrer">My Bunnies</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/vintage-by-vo/#/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/vintage-by-vo/#/testing">Test Page</Nav.Link>
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