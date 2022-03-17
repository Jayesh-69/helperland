import React,{useState} from 'react'

import Login from "./Login"
import LoginContent from "./LoginContent"

import logo from "../resources/assests/logo-small.png"
import {Navbar,Nav} from 'react-bootstrap'

function Anavbar() {

    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div>
        <Navbar expand="lg" className='faqNavbar'>
            <Navbar.Brand href="/"><img src={logo} alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto faqNavbarItems">
                    <Nav.Link style={{color:'white'}}  href="#home" className='faqHighlight'>Book Now</Nav.Link>
                    <Nav.Link style={{color:'white'}}  href="/price">Prices & services</Nav.Link>
                    <Nav.Link style={{color:'white'}}  href="#link">Warrenty</Nav.Link>
                    <Nav.Link style={{color:'white'}}  href="#link">Blog</Nav.Link>
                    <Nav.Link style={{color:'white'}}  href="#link" className='faqHighlight' onClick={togglePopup}>Login</Nav.Link>
                    <Nav.Link style={{color:'white'}}  href="#link" className='faqHighlight'>Become a Helper</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Login trigger={isOpen} setTrigger={setIsOpen}>
          <LoginContent/>
        </Login>    
    </div>
    )
}

export default Anavbar