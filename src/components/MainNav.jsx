import React from 'react'
import { 
    Nav,
    NavDropdown,
    Navbar,
    Container
} from 'react-bootstrap'

import '../assets/scss/navbar.scss'

import logo from '../assets/img/connectio-logo.png';

const MainNav = () => {

    const handleMouseOver = (e) => {
        e.currentTarget.classList.add('active')
    }

    const handleMouseLeave = (e) => {
        e.currentTarget.classList.remove('active')
    }

    return (
        <Navbar variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="!#">
                    <img src={logo} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <NavDropdown title="Lists" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="active" title="Audiences" id="basic-nav-dropdown">
                        <NavDropdown.Item className="search" onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} href="!#">
                            <span>Audience search</span>
                            <small>Find an audience on Facebook to target your ads with.</small>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="projects" onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} href="!#">
                            <span>Manage projects</span>
                            <small>Manage the Facebook audiences you’ve discovered.</small>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="persets" onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} href="!#">
                            <span>Manage persets</span>
                            <small>Manage standard and custom presets</small>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Automate" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav.Link href="!#"><i className="fas fa-graduation-cap"></i></Nav.Link>
                    <Nav.Link href="!#"><i className="fas fa-share"></i></Nav.Link>
                    <Nav.Link href="!#"><div>6</div></Nav.Link>
                    <Nav>
                        <span className="greetings">Hello</span>
                        <NavDropdown className="profile-name" title="Michael" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default MainNav
