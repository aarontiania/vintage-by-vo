import './css/App.css';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      {/* <img src={logo} className="App-logo" alt="logo" /> */}


      <Navbar.Brand href="#home">
        <text class="scriptbrandfont">vintage by vo</text>
      </Navbar.Brand>


      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">

            <Nav.Link href="#home" active>Home</Nav.Link>
            <Nav.Link href="#link">Collection</Nav.Link>
            <Nav.Link href="#link">Sales</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About ya girl</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Item Care</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">My bunny</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <p class="scriptbrandfont">testing</p>
      <p class="scriptbrandfont">testing</p>
      <p class="scriptbrandfont">testing</p>
      <p class="scriptbrandfont">testing</p>
      <p class="scriptbrandfont">testing</p>
      <p class="scriptbrandfont">testing</p>
      <p class="scriptbrandfont">testing</p>
      <p class="scriptbrandfont">testing</p>
      <p class="scriptbrandfont">testing</p>
      <p class="scriptbrandfont">testing</p>
    </div>
  );
}

export default App;
