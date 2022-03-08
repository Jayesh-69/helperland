import React from 'react'

import logo from "../resources/assests/logo-small.png"
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'

function navbar() {
  return (
        <Navbar expand="lg" className='faqNavbar'>
            <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto faqNavbarItems">
                    <Nav.Link style={{color:'white'}}  href="#home" className='faqHighlight'>Book Now</Nav.Link>
                    <Nav.Link style={{color:'white'}}  href="#link">Prices & services</Nav.Link>
                    <Nav.Link style={{color:'white'}}  href="#link">Warrenty</Nav.Link>
                    <Nav.Link style={{color:'white'}}  href="#link">Blog</Nav.Link>
                    <Nav.Link style={{color:'white'}}  href="#link" className='faqHighlight'>Login</Nav.Link>
                    <Nav.Link style={{color:'white'}}  href="#link" className='faqHighlight'>Become a Helper</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default navbar