import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

class NavbarHouerReports extends React.Component{
    render(){
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink href="/houer-report-form">Hours Report</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/show-reports">Display Report</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default NavbarHouerReports;