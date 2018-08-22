import React from 'react';
import { Nav, NavItem, NavLink, Navbar } from 'reactstrap';
import './style.css';
import logo from '../../screenPhoto.jpg';

class NavbarHouerReports extends React.Component {
    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <Nav tabs navbar color="light">
                        <NavItem>
                            <NavLink href="/houer-report-form">Hours Report</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/show-reports">Display Report</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <div className="logo">
                    <img src={logo} width="100%" height="478" />
                </div>
            </div>
        );
    }
}

export default NavbarHouerReports;