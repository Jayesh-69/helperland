import React from "react";

import "../style.css";

import Navbar from "../components/Navbar"
import priceBanner from "../resources/assests/prices-banner.png"
import Prices from "./Prices"
import ExtraService from "./ExtraService"
import WhatServie from "./WhatService";
import WhyService from "./WhyService";

import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Privacy from "../components/Privacy";

function Price() {
  return (
    <div>
        <Navbar/>
        <div className="pricePoster">
            <img src={priceBanner} alt=""/>
        </div>
        <Prices/>
        <ExtraService/>
        <WhatServie/>
        <WhyService/>
        <Newsletter />
        <Footer />
        <div className="horizontalLine">
          <hr style={{width:'80%',textAlign:'left',marginLeft:'10%',color:'white',marginTop: '0',marginBottom: '0'}}/>
        </div>
        <Privacy />
    </div>
  );
}

export default Price;
