import React from "react";

import '../style.css';

import HomeNavbar from "../components/HomeNavbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Privacy from "../components/Privacy";

import Why from "./Why";
import Blog from "./Blog";
import What from "./What";

function Homepage() {
  return (
    <div>
      <HomeNavbar />
      <Why />
      <Blog />
      <What />
      <Newsletter />
      <Footer />
      <div className="horizontalLine">
        <hr
          style={{
            width: "80%",
            textAlign: "left",
            marginLeft: "10%",
            color: "white",
            marginTop: "0",
            marginBottom: "0",
          }}
        />
      </div>
      <Privacy />
    </div>
  );
}

export default Homepage;