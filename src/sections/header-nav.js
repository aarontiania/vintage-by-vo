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
                                <NavDropdown.Item href="#action/3.1">About ya girl</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Item Care</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">My bunny</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">Contact</Nav.Link>

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