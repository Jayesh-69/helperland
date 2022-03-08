import React from "react";
import {Navbar,Nav} from 'react-bootstrap';
import Logo from '../resources/assests/logo.png';
import CheckBox from "../resources/assests/checkbox-check-grey.svg";
import Step1 from "../resources/assests/step-1.png";
import Step2 from "../resources/assests/step-2.png";
import Step3 from "../resources/assests/step-3.png";
import Step4 from "../resources/assests/step-4.png";
import UpArrow from "../resources/assests/how-it-works-up-arrow.png";
import DownArrow from "../resources/assests/how-it-works-down-arrow.png";
// import ScrollButton from "../resources/assests/down-arrow.svg";

function navbar() {
  return (
    <div className="homepageHeader">
      <div className="filter">
        <Navbar bg="" expand="lg" className="homepageNav">
          <Navbar.Brand href="#home">
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
              <Nav.Link href="#link" style={{ color: "white" }}>
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

        <div className="mono">
          <div className="col">
            <p className="monoHeading">
              Do not feel like
              <br />
              housework?
            </p>
            <p>
              Great Book now for Helperland and enjoy<br/>the benifits
            </p>
            <div>
              <p>
                <img src={CheckBox} alt="" />certified & insured helper
              </p>
              <p>
                <img src={CheckBox} alt="" />
                easy booking procedure
              </p>
              <p>
                <img src={CheckBox} alt="" />
                friendly coustomer service
              </p>
              <p>
                <img src={CheckBox} alt="" />
                secure online payment method
              </p>
            </div>
          </div>
        </div>

        <div style={{marginBottom:'10%', marginTop:'4%'}}>
				<div className="col">
					<button className="letsBook">Let's Book a Cleaner</button>
				</div>
			  </div>
			  
        <div className="row steps">
				<div className="col-md col-sm-6">
					<img src={Step1} alt="" />
					<br />
					Enter your postcode
				</div>
				<div className="arrow col-md">
					<img src={UpArrow}/>
            		<br />
          		</div>
          		<div className=" col-md col-sm-6">
					<img src={Step2} alt="" />
					<br />
					Select your plain
				</div>
				<div className="arrow col-md">
					<img src={DownArrow} alt="" />
					<br />
				</div>
				<div className="col-md col-sm-6">
					<img src={Step3} alt="" />
					<br />
					Pay securely online
				</div>
				<div className="arrow col-md">
					<img src={UpArrow} alt="" />
					<br />
				</div>
				<div className="col-md col-sm-6">
					<img src={Step4} alt="" />
					<br />
					Enjoy amazing service
				</div>
			  </div>
      </div>
    </div>
  );
}

export default navbar;
