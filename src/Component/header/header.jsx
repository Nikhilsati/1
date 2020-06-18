import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './header.css';
const Header = () => {
	return (
		<div className="header">
			<Navbar className="h" collapseOnSelect expand="xl" bg="dark" variant="dark">
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="">Features</Nav.Link>
						<Nav.Link href="">Pricing</Nav.Link>
						<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
							<NavDropdown.Item href="">Action</NavDropdown.Item>
							<NavDropdown.Item href="">Another action</NavDropdown.Item>
							<NavDropdown.Item href="">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="">Separated link</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link href="#deets">More deets</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Dank memes
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
