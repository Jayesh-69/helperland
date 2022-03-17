import React,{useState} from "react";

import Login from "./Login"
import LoginContent from "./LoginContent"

import {Navbar,Nav} from 'react-bootstrap';
import Logo from '../resources/assests/logo.png';

import Register from "../BecomeAPro/Register"

// import ScrollButton from "../resources/assests/down-arrow.svg";

function Pnavbar() {

  const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
  }

  return (
    <div className="propageHeader">
      <div className="profilter">
        <Navbar bg="" expand="lg" className="homepageNav">
          <Navbar.Brand href="/">
            <img
              src={Logo}
              alt=""
              srcSet=""
              width={160}
              height={120}
              style={{ marginLeft: "5%" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto homepageNavbarLink">
              <Nav.Link
                href="#home"
                style={{ color: "white" }}
                className="homepageNavbarSpecial"
              >
                Book now
              </Nav.Link>
              <Nav.Link href="/price" style={{ color: "white" }}>
                Prices & Services
              </Nav.Link>
              <Nav.Link href="#home" style={{ color: "white" }}>
                Warranty
              </Nav.Link>
              <Nav.Link href="#home" style={{ color: "white" }}>
                Blog
              </Nav.Link>
              <Nav.Link href="#home" style={{ color: "white" }}>
                Contact
              </Nav.Link>
              <Nav.Link
                href="#home"
                style={{ color: "white" }}
                className="homepageNavbarSpecial"
                onClick={togglePopup}
              >
                Login
              </Nav.Link>
              <Nav.Link
                href="#home"
                style={{ color: "white" }}
                className="homepageNavbarSpecial"
              >
                Become a helper
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Login trigger={isOpen} setTrigger={setIsOpen}>
          <LoginContent/>
        </Login> 
        <Register/>
      </div>
    </div>
  );
}

export default Pnavbar;
