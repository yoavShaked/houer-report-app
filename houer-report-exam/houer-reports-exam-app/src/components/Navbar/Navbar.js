import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

class NavbarHouerReports extends React.Component{
    render(){
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink href="/houer-report-form">Houer Reports</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/show-reports">Display Reports</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default NavbarHouerReports;