import '../css/App.css';
import '../css/sidemenu.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Component, React } from 'react';
import SideNav, { NavItem, NavText, NavIcon } from '@trendmicro/react-sidenav';

export default class SideMenu extends Component {
    render() {
        return (
            <SideNav >
                <SideNav.Toggle />
                <SideNav.Nav>
                    <NavItem eventKey="Dior">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            <Nav.Link as={Link} to={"/collection?b=d"} className="sidemenu-name">
                                Dior
                            </Nav.Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Louis Vuitton">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            <Nav.Link as={Link} to={"/collection?b=lv"} className="sidemenu-name">
                                Louis Vuitton
                            </Nav.Link>
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav >
        );
    }
}