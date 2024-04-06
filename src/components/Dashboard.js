import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <Navbar bg="secondary" expand="lg" className="custom-navbar ">
            <Navbar.Brand href="#home" className='col1'>Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Products" id="products-dropdown">
                        <NavDropdown.Item href="#products-option1">
                            <Link to='/marketplace'>Show Products</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#products-option2">
                            <Link to='/addproduct'>Add a Product</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Jobs" id="jobs-dropdown">
                        <NavDropdown.Item href="#jobs-option1">
                            <Link to='/showjobs'>Show Jobs</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#jobs-option2">
                            <Link to='/addjob'>Add a Job</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Equipments" id="equipments-dropdown">
                        <NavDropdown.Item href="#equipments-option1">
                            <Link to='/showequipments'>Show Equipments</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#equipments-option2">
                            <Link to='/addequip'>Add Equipment</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Dashboard;
