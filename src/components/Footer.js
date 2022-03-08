import React from "react";

import smallLogo from "../resources/assests/logo-small.png";
import fb from "../resources/assests/ic-fb.png";
import insta from "../resources/assests/ic-insta.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footerLogo">
        <img
          style={{height: '52px', width: '72px'}}
          src={smallLogo}
          alt=""
        />
      </div>
      <div className="links">
        <a className="homepageFooterLink" href="#">
          Home
        </a>
        <a className="homepageFooterLink" href="#">
          About
        </a>
        <a className="homepageFooterLink" href="#">
          Testimonials
        </a>
        <a className="homepageFooterLink" href="#">
          FAQS
        </a>
        <a className="homepageFooterLink" href="#">
          Insurance Policy
        </a>
        <a className="homepageFooterLink" href="#">
          Impressum
        </a>
      </div>
      <div className="socialLinks">
        <a href="#">
          <img src={fb} alt="" />
        </a>
        <a href="#">
          <img src={insta} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
